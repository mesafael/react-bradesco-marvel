import React from "react";
import styled from "styled-components";

import { ItemHero } from "../itemHero/ItemHero";

export const ListHeroes = ({ heroes }) => {
  return (
    <WrapperList>
      <HeaderList>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </HeaderList>
      {heroes.map((item) => (
        <ItemHero key={item.id} hero={item} />
      ))}
    </WrapperList>
  );
};

const WrapperList = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto 0;
  a {
    color: #000;
    text-decoration: none;
  }
`;

const HeaderList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    width: 31%;
  }
`;
