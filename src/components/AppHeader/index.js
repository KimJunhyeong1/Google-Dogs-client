import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { setUnauthorized } from "../../features/authSlice";
import Heading from "../shared/Heading";

function AppHeader({ isLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUnauthorized());

    navigate("/login");
  };

  return (
    <Header>
      <Link to="/login">
        <Brand>
          <img src={logo} alt="logo" />
          <Heading>Google Dogs</Heading>
        </Brand>
      </Link>
      <ButtonGroup>
        {isLogin && (
          <>
            <Link to={"/docs/new"}>
              <Button>문서생성</Button>
            </Link>
            <Button onClick={handleLogout}>로그아웃</Button>
          </>
        )}
      </ButtonGroup>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const ButtonGroup = styled.section`
  width: 30%;
  margin-left: 24%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2em 0;
`;

const Button = styled.button`
  width: 200px;
  height: 20px;
`;

const Brand = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    text-transform: uppercase;
    font-style: italic;
  }

  img {
    height: 15px;
  }
`;

export default AppHeader;
