import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createDoc } from "../../features/docsSlice";
import useInputs from "../../hooks/useInputs";

function DocForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [{ title, content }, onChange, reset] = useInputs({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createDoc({ title, content }));
    reset();

    navigate("/");
  };

  return (
    <>
      <h2>문서 생성</h2>
      <DocFormWrapper onSubmit={handleSubmit}>
        <TitleInput
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder={"제목"}
          required
        />
        <ContentArea
          name="content"
          value={content}
          onChange={onChange}
          placeholder={"내용"}
          required
        />

        <SubmitButton type="submit">저장</SubmitButton>
      </DocFormWrapper>
    </>
  );
}

const DocFormWrapper = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 800px;
`;

const ContentArea = styled.textarea`
  width: 800px;
  height: 400px;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 200px;
`;

export default DocForm;
