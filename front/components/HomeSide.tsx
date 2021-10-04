import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import useScrollDirection from "../lib/hooks/scrollDirection";

const Wrapper = styled.ul`
  width: 80px;
  position: absolute;
  top: 107px;
  right: 30px;

  transition: all 0.3s linear;

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
  // const direction = useScrollDirection();

  const setSlider = useCallback(() => {
    if (SideRef.current) {
      // const { top } = SideRef.current.getBoundingClientRect();
      // const originSpot = SideRef.current.style.transform
      //   ? Number(SideRef.current.style.transform.split("(")[1].split("px")[0])
      //   : 0;

      SideRef.current.style.display = "block";
      if (window.scrollY > 200) {
        setTimeout(
          () => (SideRef.current!.style.top = `${window.scrollY}px`),
          300
        );
      } else {
        if (window.scrollY === 0) {
          SideRef.current.style.display = "none";
          return;
        }
        SideRef.current.style.top = "107px";
      }
    }
  }, []);

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
