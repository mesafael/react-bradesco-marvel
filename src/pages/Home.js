import React, { useState, useEffect } from "react";
import { ListHeroes } from "../componentes/listHeroes/ListHeroes";
import { Header } from "../componentes/header/Header";
import { getHeroes } from "../services/HeroService";
import { Pagination } from "../componentes/pagination/Pagination";
import { Search } from "../componentes/search/Search";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes(currentPage).then((response) => {
      setHeroes(response.data.results);
      setTotalPage(Math.trunc(response.data.total / 10));
    });
  }, [currentPage]);

  return (
    <>
      <Header />
      <Search />
      <ListHeroes heroes={heroes} />

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  );
};
