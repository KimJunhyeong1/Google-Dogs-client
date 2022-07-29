import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { io } from "socket.io-client";
import getCaretCoordinates from "textarea-caret";
import useInputs from "../../hooks/useInputs";

function DocDetails() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id: docId } = useParams();
  const [socket, setSocket] = useState(null);
  const [otherCursor, setOtherCursor] = useState({});
  const [{ title, content }, onChange] = useInputs({
    title: "",
    content: "",
  });
  const handleCursorEvent = useCallback(
    (e) => {
      const caret = getCaretCoordinates(e.target, e.target.selectionEnd);

      socket.emit("cursor-postion", {
        name: user.name,
        cursorPos: caret,
      });
    },
    [socket, user.name]
  );

  useEffect(() => {
    const socketIo = io("http://localhost:8000");
    setSocket(socketIo);

    const interval = setInterval(() => {
      setOtherCursor({});
    }, 5000);

    return () => {
      socketIo.disconnect();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (socket === null) return;

    socket.once("load-doc", (doc) => {
      onChange({ target: { name: "title", value: doc.title } });
      onChange({ target: { name: "content", value: doc.content } });
    });

    socket.emit("get-doc", docId);
  }, [socket, docId, onChange]);

  useEffect(() => {
    if (socket === null) return;

    const contentHandler = (content) => {
      onChange({ target: { name: "content", value: content } });
    };
    const titleHandler = (title) => {
      onChange({ target: { name: "title", value: title } });
    };
    const cursorHandler = (data) => {
      setOtherCursor(data);
    };

    socket.on("broadcast-content-change", contentHandler);
    socket.on("broadcast-title-change", titleHandler);
    socket.on("broadcast-other-cursor-postion", cursorHandler);

    return () => {
      socket.off("broadcast-content-change", contentHandler);
      socket.off("broadcast-title-change", titleHandler);
      socket.off("broadcast-other-cursor-postion", cursorHandler);
    };
  }, [socket, onChange]);

  useEffect(() => {
    if (socket === null) return;

    const interval = setInterval(() => {
      socket.emit("auto-save-doc", { title, content });
    }, 20000);

    return () => clearInterval(interval);
  }, [socket, title, content]);

  return (
    <>
      <DocDetailForm>
        <TitleInput
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            socket.emit("title-change", e.target.value);
            onChange(e);
          }}
          placeholder={"제목"}
          required
        />

        <Div>
          {otherCursor.name && (
            <Cursor
              top={otherCursor.cursorPos.top}
              left={otherCursor.cursorPos.left}
            >
              <CursorCaret />
              <CursorTop />
              <CursorName>{otherCursor.name}</CursorName>
            </Cursor>
          )}
          <ContentArea
            name="content"
            value={content}
            onChange={(e) => {
              socket.emit("content-change", e.target.value);
              onChange(e);
            }}
            placeholder={"내용"}
            required
            onClick={handleCursorEvent}
            onKeyUp={handleCursorEvent}
          />
        </Div>
      </DocDetailForm>
    </>
  );
}

const DocDetailForm = styled.form`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  position: relative;
`;

const Cursor = styled.div`
  cursor: text;
  position: absolute;
  z-index: 27;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  opacity: 1;
`;

const CursorCaret = styled.div`
  border-color: rgb(19, 115, 51);
  height: 16.8652px;
  position: absolute;
  width: 0px;
  border-left: 2px solid;
  font-size: 0;
`;

const CursorTop = styled.div`
  background-color: rgb(19, 115, 51);
  opacity: 1;
  position: absolute;
  width: 6px;
  left: -2px;
  top: -2px;
  height: 6px;
  font-size: 0;
`;

const CursorName = styled.div`
  opacity: 1;
  background-color: rgb(19, 115, 51);
  border-radius: 2px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 12px;
  position: absolute;
  font-size: 10px;
  color: #fff;
  top: -14px;
  left: -2px;
  padding: 2px;
  white-space: nowrap;
`;
const TitleInput = styled.input`
  width: 800px;
`;

const ContentArea = styled.textarea`
  width: 800px;
  height: 400px;
  resize: none;
`;

export default DocDetails;
