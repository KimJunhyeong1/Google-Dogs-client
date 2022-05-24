import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { getDocs } from "../../features/docsSlice";
import Docs from "../Docs";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);

  return (
    <Wrapper>
      <Docs />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
