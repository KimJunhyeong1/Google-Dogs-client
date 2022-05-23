import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDocs } from "../../features/docsSlice";
import Doc from "../Doc";

function Docs() {
  const docIds = useSelector((state) => state.docs.allIds);

  return (
    <DocsWrapper>
      {docIds.map((docId) => (
        <Link to={`/docs/${docId}`} key={docId}>
          <Doc id={docId} />
        </Link>
      ))}
    </DocsWrapper>
  );
}

const DocsWrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 50px;
  row-gap: 300px;
`;

export default Docs;
