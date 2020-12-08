import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ItemHero = (props) => {
  return (
    <Link to={"/hero/" + props.hero.id}>
      <WrapperHero>
        <Col>
          <ImageHero
            src={
              props.hero.thumbnail.path + "." + props.hero.thumbnail.extension
            }
          />
          <p>{props.hero.name}</p>
        </Col>
        <Col>
          {props.hero.series.items.map((item, i, arr) => {
            if (arr.length - 1 === i) {
              return item.name + ".";
            } else {
              return item.name + ", ";
            }
          })}
        </Col>
        <Col>
          {props.hero.events.items.map((item, i, arr) => {
            if (arr.length - 1 === i) {
              return item.name + ".";
            } else {
              return item.name + ", ";
            }
          })}
        </Col>
      </WrapperHero>
    </Link>
  );
};

const WrapperHero = styled.div`
  width: 100%;
  height: auto;
  min-height: 85px;
  background-color: #fff;
  margin-bottom: 15px;
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
`;
const Col = styled.div`
  width: 31%;
  height: auto;
  display: flex;
  p {
    margin: auto auto auto 0;
  }
`;

const ImageHero = styled.div`
  width: 50px;
  height: 75px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin: auto 15px auto 0;
`;
