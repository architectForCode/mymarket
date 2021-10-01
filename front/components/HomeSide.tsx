import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import useScrollDirection from "../lib/hooks/scrollDirection";

const Wrapper = styled.ul`
  width: 80px;
  position: absolute;
  top: 107px;
  right: 30px;

  transition: transform 0.3s linear;

  & > li:first-child {
    margin-bottom: 8px;
  }
  .secondUl {
    font-size: 0.8rem;
    font-weight: 600;
    color: #3d3d3d;
    li {
      border: 1px solid #dfe6e9;
      width: 100%;
      padding: 4px;
      cursor: pointer;
    }
  }
`;

const HomeSide = () => {
  const SideRef = useRef<HTMLUListElement>(null);
  const direction = useScrollDirection();

  const setSlider = useCallback(() => {
    if (SideRef.current) {
      const { top } = SideRef.current.getBoundingClientRect();
      const originSpot = SideRef.current.style.transform
        ? Number(SideRef.current.style.transform.split("(")[1].split("px")[0])
        : 0;

      if (window.scrollY >= 200) {
        if (direction === "down") {
          SideRef.current.style.transform = `translateY(${originSpot + 20}px)`;
        } else if (direction === "up") {
          SideRef.current.style.transform = `translateY(${originSpot - 20}px)`;
        }
      } else {
        SideRef.current.style.transform = "translateY(0px)";
      }

      // if (direction === "down") {
      //   console.log(window.scrollY);
      //   if (window.scrollY<= 100) {
      //     SideRef.current.style.transform = `translateY(${originSpot + 20}px)`;
      //   }
      // } else if (direction === "up") {
      //   if (top > 100)
      //     SideRef.current.style.transform = `translateY(${originSpot - 20}px)`;

      //   if (Number(window.scrollY) < 205)
      //     SideRef.current.style.transform = "translateY(0px)";
      // }
    }
  }, [direction]);

  useEffect(() => {
    window.addEventListener("scroll", setSlider);

    return () => window.removeEventListener("scroll", setSlider);
  }, [setSlider]);

  return (
    <Wrapper ref={SideRef}>
      <li>
        <Image
          src={
            "https://kurly.s3.ap-northeast-1.amazonaws.com/%ED%99%88%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94.PNG"
          }
          width={80}
          height={120}
          alt="그림"
        ></Image>
      </li>
      <li>
        <ul className="secondUl">
          <li>등급별 혜택</li>
          <li>레시피</li>
          <li>베스트 후기</li>
        </ul>
      </li>
    </Wrapper>
  );
};

export default HomeSide;
