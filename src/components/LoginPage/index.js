import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, googleAuthProvider } from "../../services/firebase";
import { socialLogin } from "../../features/authSlice";
import googleIcon from "../../assets/GoogleIcon.png";

function LoginPage() {
  const dispatch = useDispatch();
  const googleLogin = async () => {
    const { user } = await auth.signInWithPopup(googleAuthProvider);

    dispatch(socialLogin(user));
  };

  return (
    <Wrapper>
      <GoogleLoginButton onClick={googleLogin}>
        <img src={googleIcon} alt="googleIcon" />
        <div>구글로 계속하기</div>
      </GoogleLoginButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoogleLoginButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #0078ff;
  border-radius: 8px;
  background-color: #0078ff;
  padding: 7px 13px;

  img {
    width: 35px;
  }

  div {
    margin-left: 50px;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 18px;
  }
`;

export default LoginPage;
