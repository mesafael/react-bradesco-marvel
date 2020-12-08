import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getHeroes } from "./ListHeroes.servive";
import { ItemHero } from "../itemHero/ItemHero";

export const ListHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes().then((items) => {
      setHeroes(items.data.results);
    });
  }, []);

  return (
    <WrapperList>
      <HeaderList>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </HeaderList>
      {heroes.map((item) => (
        <ItemHero hero={item} />
      ))}
    </WrapperList>
  );
};

const WrapperList = styled.section`
  width: 1200px;
  min-width: 1200px;
  margin: 50px auto 0;
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
