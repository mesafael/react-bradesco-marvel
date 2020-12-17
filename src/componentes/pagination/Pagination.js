import React from "react";
import styled from "styled-components";

export const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const changecurrentPage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <WrapperPagination>
      {currentPage !== 0 && (
        <>
          <ButtonPagination onClick={() => changecurrentPage(0)}>
            {"<<"}
          </ButtonPagination>

          <ButtonPagination onClick={() => changecurrentPage(currentPage - 1)}>
            {"<"}
          </ButtonPagination>
        </>
      )}
      {currentPage - 1 > 0 && (
        <ButtonPagination onClick={() => changecurrentPage(currentPage - 2)}>
          {currentPage - 1}
        </ButtonPagination>
      )}
      {currentPage > 0 && (
        <ButtonPagination onClick={() => changecurrentPage(currentPage - 1)}>
          {currentPage}
        </ButtonPagination>
      )}
      <ButtonPagination active>{currentPage + 1}</ButtonPagination>
      {currentPage !== totalPage && (
        <>
          <ButtonPagination onClick={() => changecurrentPage(currentPage + 1)}>
            {currentPage + 2}
          </ButtonPagination>
          {currentPage + 1 !== totalPage && (
            <ButtonPagination
              onClick={() => changecurrentPage(currentPage + 2)}
            >
              {currentPage + 3}
            </ButtonPagination>
          )}
        </>
      )}

      {currentPage < 2 && (
        <ButtonPagination onClick={() => changecurrentPage(currentPage + 3)}>
          {currentPage + 4}
        </ButtonPagination>
      )}

      {currentPage === 0 && (
        <ButtonPagination onClick={() => changecurrentPage(currentPage + 4)}>
          {currentPage + 5}
        </ButtonPagination>
      )}

      {currentPage !== totalPage && (
        <>
          <ButtonPagination onClick={() => changecurrentPage(currentPage + 1)}>
            {">"}
          </ButtonPagination>

          <ButtonPagination onClick={() => changecurrentPage(totalPage)}>
            {">>"}
          </ButtonPagination>
        </>
      )}
    </WrapperPagination>
  );
};

const WrapperPagination = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonPagination = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgb(218, 218, 218);
  display: flex;
  margin: auto 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: #000;
  }
  ${({ active }) =>
    active &&
    `
    background: #3131d4;
    color: #fff;
  `}
`;
