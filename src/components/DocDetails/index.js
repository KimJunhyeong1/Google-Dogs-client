import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchDoc } from "../../api";
import { getDoc } from "../../features/docsSlice";

function DocDetails() {
  const { id: docId } = useParams();
  const dispatch = useDispatch();
  const [doc, setDoc] = useState({});
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs;

  const handleInputsChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    async function getDoc(docId) {
      try {
        const response = await fetchDoc(docId);

        setDoc((prev) => ({ ...prev, ...response.data }));
        setInputs({
          title: response.data.title,
          content: response.data.content,
        });
      } catch (error) {
        console.warn("요청 오류: ", error);
      }
    }

    getDoc(docId);
  }, [docId]);

  return (
    <>
      {doc && (
        <form>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputsChange}
            placeholder={"제목"}
            required
          />
          <textarea
            name="content"
            value={content}
            onChange={handleInputsChange}
            placeholder={"내용"}
            required
          />

          <button type="submit">저장</button>
        </form>
      )}
    </>
  );
}

export default DocDetails;
