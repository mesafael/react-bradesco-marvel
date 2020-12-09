import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoBradesco from "../../images/logo-bradesco.png";

export const Header = () => {
  return (
    <WrapperHHeader>
      <Link to="/">
        <img src={LogoBradesco} alt="" />
      </Link>
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
