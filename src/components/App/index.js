import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "../AppHeader";
import HomePage from "../HomePage";
import Chatting from "../DocForm";
import LoginPage from "../LoginPage";
import Container from "../shared/Container";
import { auth } from "../../services/firebase";
import { setAuthorized, setUnauthorized } from "../../features/authSlice";
import DocForm from "../DocForm";
import DocDetails from "../DocDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const auth = useSelector((state) => state.auth.authData);

  return (
    <>
      <AppHeader isLogin={user ? true : false} />
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/docs" replace />} />
            <Route path="/docs" element={<HomePage />} />
            <Route path="/docs/new" element={<DocForm />} />
            <Route path="/docs/:id" element={<DocDetails />} />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/docs" replace />}
            />
          </Routes>
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  margin-top: 110px;
`;

export default App;
