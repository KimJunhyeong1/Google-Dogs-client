import React from "react";
import PropTypes from "prop-types";
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
  width: 227px;
  height: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dadce0;
  border-radius: 6px;

  img {
    width: 100px;
    height: 100px;
  }

  .contents {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  .content {
    font-weight: 350;
    font-size: small;
  }
`;

Doc.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Doc;
