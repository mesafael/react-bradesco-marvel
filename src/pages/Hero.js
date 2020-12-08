import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getHero } from "../componentes/listHeroes/ListHeroes.servive";

export const Hero = (props) => {
  const [hero, setHero] = useState({});
  const heroId = useParams().heroId;
  console.log(heroId);
  useEffect(() => {
    getHero(heroId).then((items) => {
      setHero(items.data.results[0]);
    });
  }, [heroId]);

  return (
    <WrapperHero>
      <BannerHero src={hero.thumbnail.path + "." + hero.thumbnail.extension} />
    </WrapperHero>
  );
};

const WrapperHero = styled.section`
  width: 1200px;
  min-width: 1200px;
  margin: 50px auto 0;
`;

const BannerHero = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`;
