import React from "react";
import { ListHeroes } from "../componentes/listHeroes/ListHeroes";
import { Header } from "../componentes/header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <ListHeroes />
    </>
  );
};
