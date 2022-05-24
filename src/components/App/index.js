import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "../AppHeader";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import Container from "../shared/Container";
import DocForm from "../DocForm";
import DocDetails from "../DocDetails";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <>
      <AppHeader isLogin={loggedIn} />
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/docs" replace />} />
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route path="/docs" element={<HomePage />} />
              <Route path="/docs/new" element={<DocForm />} />
              <Route path="/docs/:id" element={<DocDetails />} />
            </Route>
            <Route
              path="/login"
              element={
                !loggedIn ? <LoginPage /> : <Navigate to="/docs" replace />
              }
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
