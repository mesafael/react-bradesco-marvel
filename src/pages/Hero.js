import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getHero } from "../services/HeroService";
import { Header } from "../componentes/header/Header";

export const Hero = (props) => {
  const [hero, setHero] = useState({});
  const [heroId] = useState(useParams().heroId);

  useEffect(() => {
    getHero(heroId)
      .then((items) => {
        setHero(items.data.results[0]);
      })
      .catch((error) => {});
  }, [heroId]);

  return (
    <>
      <Header />
      <WrapperHero>
        {!!hero.thumbnail && (
          <BannerHero
            src={hero.thumbnail.path + "." + hero.thumbnail.extension}
          />
        )}
        <ContentHero>
          <p>
            <b>Nome: </b> {hero.name}
          </p>
          {!!hero.series && (
            <p>
              <b>Series: </b>
              {hero.series.items.map((item, i, arr) => {
                if (arr.length - 1 === i) {
                  return item.name + ".";
                } else {
                  return item.name + ", ";
                }
              })}
            </p>
          )}
          {!!hero.comics && (
            <p>
              <b>Quadrinhos</b>:
              {hero.comics.items.map((item, i, arr) => {
                if (arr.length - 1 === i) {
                  return item.name + ".";
                } else {
                  return item.name + ", ";
                }
              })}
            </p>
          )}

          {!!hero.stories && (
            <p>
              <b>Histórias</b>:
              {hero.stories.items.map((item, i, arr) => {
                if (arr.length - 1 === i) {
                  return item.name + ".";
                } else {
                  return item.name + ", ";
                }
              })}
            </p>
          )}
        </ContentHero>
      </WrapperHero>
    </>
  );
};

const WrapperHero = styled.section`
  width: 100%;
  max-width: 1200px;
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
  width: calc(70% - 20px);
  p {
    margin-bottom: 10px;
  }
  b {
    font-weight: bold;
  }
`;
