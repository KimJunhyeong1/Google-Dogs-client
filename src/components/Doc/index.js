import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import docImg from "../../assets/docImg.png";

function Doc({ id }) {
  const doc = useSelector((state) => state.docs.byId[id]);

  return (
    <DocWrapper>
      <div className="contents">
        <img src={docImg} alt="docImg" />
        <div className="title">{doc.title}</div>
        <div className="content">{doc.creatAt}</div>
      </div>
    </DocWrapper>
  );
}

const DocWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 64px;
  }

  .contents {
    flex-grow: 1;
  }

  .overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-weight: bold;
    font-size: large;
  }

  .content {
    font-weight: 350;
    font-size: small;
  }
`;

export default Doc;
