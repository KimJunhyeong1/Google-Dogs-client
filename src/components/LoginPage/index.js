import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { auth, googleAuthProvider } from "../../services/firebase";
import { setAuthorized, setUnauthorized } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        try {
          const { user } = result;
          const idTokenResult = await user.getIdTokenResult();
          const res = await login(idTokenResult.token);

          dispatch(setAuthorized(res.data));

          navigate("/");
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <button onClick={googleLogin}>구글 로그인</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginPage;
