import React, { useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createDoc } from "../../features/docsSlice";

function DocForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSaveButtonClick = (e) => {
    e.preventDefault();

    if (!inputs.title || !inputs.content) return;

    dispatch(createDoc(inputs));

    setInputs({ title: "", content: "" });
    navigate("/");
  };

  return (
    <>
      <h2>문서 생성</h2>
      <form onSubmit={handleSaveButtonClick}>
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
    </>
  );
}

export default DocForm;
