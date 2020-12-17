import React from "react";
import styled from "styled-components";

export const Search = () => {
  console.log(`oi`);
  return (
    <WrapperSearch>
      <h3>Busca de Personagens</h3>
      <p>Nome do Personagem</p>
      <input placeholder="Search" type="text" />
    </WrapperSearch>
  );
};

const WrapperSearch = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto 0;
  h3 {
    font-weight: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    margin-bottom: 8px;
  }
  input {
    width: 295px;
    height: 30px;
  }
`;
