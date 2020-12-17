import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoBradesco from "../../images/logo-bradesco.png";
import ImageUser from "../../images/user.png";

export const Header = () => {
  return (
    <WrapperHHeader>
      <Link to="/">
        <img src={LogoBradesco} alt="" />
      </Link>
      <BoxUser>
        <p>
          <b>Rafael Melo </b>
        </p>
        <p> Teste de front-end</p>
        <img src={ImageUser} alt="" />
      </BoxUser>
    </WrapperHHeader>
  );
};

const WrapperHHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;

  a {
    height: 50px;
    margin: auto auto auto 50px;
  }
  img {
    height: 100%;
  }
`;

const BoxUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 50px 0;
  img {
    height: 50px;
    margin-left: 10px;
  }
  p {
    font-size: 14px;
    margin-right: 10px;
    b {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
