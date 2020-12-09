import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getHero } from "../componentes/listHeroes/ListHeroes.servive";
import { Header } from "../componentes/header/Header";

export const Hero = (props) => {
  const [hero, setHero] = useState({});
  const [heroId, setHeroId] = useState(useParams().heroId);

  useEffect(() => {
    getHero(heroId).then((items) => {
      setHero(items.data.results[0]);
    });
  }, [heroId]);

  return (
    <>
      <Header />
      <WrapperHero>
        {/* <BannerHero src={hero.thumbnail.path + "." + hero.thumbnail.extension} /> */}
        <BannerHero />
        <ContentHero>
          <p>Nome: {hero.name}</p>
          <p>Descrição: {hero.name}</p>
        </ContentHero>
      </WrapperHero>
    </>
  );
};

const WrapperHero = styled.section`
  width: 1200px;
  min-width: 1200px;
  margin: 50px auto 0;
  display: flex;
`;

const BannerHero = styled.div`
  width: 30%;
  height: 700px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
  background-color: gray;
`;

const ContentHero = styled.div`
  margin-left: 20px;
`;
