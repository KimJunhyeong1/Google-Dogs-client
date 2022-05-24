import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Doc from "../Doc";

function Docs() {
  const docIds = useSelector((state) => state.docs.allIds);

  return (
    <DocsWrapper>
      {docIds.map((docId) => (
        <DocLink to={`/docs/${docId}`} key={docId}>
          <Doc id={docId} />
        </DocLink>
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

const DocLink = styled(Link)`
  width: 227px;
  height: 227px;
  text-decoration: none;
  color: black;
`;

export default Docs;
