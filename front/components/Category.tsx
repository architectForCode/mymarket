import {
  faAppleAlt,
  faCarrot,
  faCoffee,
  faConciergeBell,
  faCookie,
  faDrumstickBite,
  faFish,
  faGift,
  faGifts,
  faMortarPestle,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { ICategory } from "../types";
import CategoryInfo from "./CategoryInfo";

const CategoryWrapper = styled.div`
  width: 26rem;
  height: 70vh;
  display: flex;
  transform: translate(22.5%, 1%);
  overflow: auto;
  ul.mainList {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    color: gray;
    border: 1px solid #cccccc;
    width: 13rem;
    li {
      display: grid;
      grid-template-columns: 50px 1fr;
      justify-items: center;
      cursor: pointer;
      padding: 10px 0;
      &:hover {
        color: #5f0080;
        background-color: #f5f6fa;
      }
      span {
        justify-self: start;
      }
    }
  }
`;

const Category: React.FC<ICategory> = ({ categoryHover, categoryMouseOut }) => {
  const [keyword, setKeyword] = useState("");
  const listMouseEnter = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI" && keyword !== target.id) {
      setKeyword(target.id);
    }
  };

  return (
    <CategoryWrapper
      onMouseEnter={categoryHover}
      onMouseLeave={categoryMouseOut}
    >
      <ul className="mainList" onMouseMove={listMouseEnter}>
        <li id="gift">
          <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
          <span>선물하기</span>
        </li>
        <li id="holiday">
          <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
          <span>추석 선물세트</span>
        </li>
        <li id="vegetables">
          <FontAwesomeIcon icon={faCarrot}></FontAwesomeIcon>
          <span>채소</span>
        </li>
        <li id="fruit">
          <FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon>
          <span>과일•견과•쌀</span>
        </li>
        <li id="fish">
          <FontAwesomeIcon icon={faFish}></FontAwesomeIcon>
          <span>수산•해산•건어물</span>
        </li>
        <li id="meat">
          <FontAwesomeIcon icon={faDrumstickBite}></FontAwesomeIcon>
          <span>정육•계란</span>
        </li>
        <li id="main">
          <FontAwesomeIcon icon={faConciergeBell}></FontAwesomeIcon>
          <span>국•반찬•메인요리</span>
        </li>
        <li id="salad">
          <FontAwesomeIcon icon={faSeedling}></FontAwesomeIcon>
          <span>셀러드•간편식</span>
        </li>
        <li id="noodle">
          <FontAwesomeIcon icon={faMortarPestle}></FontAwesomeIcon>
          <span>면•양념•오일</span>
        </li>
        <li id="drink">
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <span>생수•음료•우유•커피</span>
        </li>
        <li id="cookie">
          <FontAwesomeIcon icon={faCookie}></FontAwesomeIcon>
          <span>간식•과자•떡</span>
        </li>
      </ul>
      {keyword && <CategoryInfo keyword={keyword}></CategoryInfo>}
    </CategoryWrapper>
  );
};

export default Category;
