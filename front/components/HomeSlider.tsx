import styled from "styled-components";
import Image from "next/image";
import { SliderImages } from "../lib/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const Wraper = styled.div`
  position: relative;
  overflow: hidden;
`;

const SliderWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 100%);
  width: 100%;
  height: 360px;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  transition: transform 0.5s ease-in-out;
  li {
    all: unset;
    width: 100%;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  font-size: 1.8rem;
  width: 50px;
  height: 50px;
  background-color: rgba(15, 15, 15, 0.2);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;
`;
export const RightArrow = styled(LeftArrow)`
  left: unset;
  right: 30px;
`;

const HomeSlider = () => {
  const slider = useRef<HTMLUListElement>(null);
  const listItem = useRef<HTMLLIElement>(null);
  const Left = useRef<HTMLDivElement>(null);
  const Right = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    if (Left.current && Right.current) {
      Left.current.style.display = "flex";
      Right.current.style.display = "flex";
    }
  };

  const onMouseLeave = () => {
    if (Left.current && Right.current) {
      Left.current.style.display = "none";
      Right.current.style.display = "none";
    }
  };

  const onLeftSliderClick = () => {
    const sliderRef = slider.current;
    if (sliderRef && listItem.current) {
      const originSpot = sliderRef.style.transform
        ? Number(sliderRef.style.transform.split("(")[1].split("px")[0])
        : 0;
      // 일반적인 움직임

      if (-1 * originSpot - listItem.current.clientWidth <= 0) {
        setTimeout(() => {
          slider.current!.style.transform = `translateX(-${
            sliderRef.scrollWidth - 2 * listItem.current!.clientWidth
          }px)`;
          slider.current!.style.transition = "unset";
        }, 500);
      }

      slider.current.style.transform = `translateX(-${
        -1 * originSpot - listItem.current.clientWidth
      }px)`;
      slider.current.style.transition = `transform 0.5s ease-in-out`;
    }
  };

  const onRightSliderClick = () => {
    const sliderRef = slider.current;
    if (sliderRef && listItem.current) {
      const originSpot = sliderRef.style.transform
        ? Number(sliderRef.style.transform.split("(")[1].split("px")[0])
        : 0;

      if (
        -1 * (originSpot - listItem.current.clientWidth - 300) >=
        sliderRef.scrollWidth - listItem.current.clientWidth
      ) {
        setTimeout(() => {
          sliderRef.style.transform = `translateX(-${
            listItem.current!.clientWidth
          }px)`;
          slider.current!.style.transition = "unset";
        }, 500);
      }

      // 일반적인 움직임
      slider.current.style.transform = `translateX(-${
        listItem.current.clientWidth - originSpot
      }px)`;
      slider.current.style.transition = `transform 0.5s ease-in-out`;
    }
  };

  useEffect(() => {
    setInterval(() => onRightSliderClick(), 5000);
    if (slider.current && listItem.current) {
      slider.current.style.transform = `translateX(-${listItem.current.clientWidth}px)`;
    }
  }, []);

  return (
    <Wraper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SliderWrapper ref={slider}>
        <li key={"first"} ref={listItem}>
          <Image
            key={"first"}
            src={SliderImages[SliderImages.length - 1]}
            alt="그림"
            width={1300}
            height={360}
          ></Image>
        </li>
        {SliderImages.map((item, index) => (
          <li key={index}>
            <Image
              key={index}
              src={item}
              alt="그림"
              width={1300}
              height={360}
            ></Image>
          </li>
        ))}
        <li key={"last"}>
          <Image
            key={"last"}
            src={SliderImages[0]}
            alt="그림"
            width={1300}
            height={360}
          ></Image>
        </li>
      </SliderWrapper>
      <LeftArrow onClick={onLeftSliderClick} ref={Left}>
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </LeftArrow>
      <RightArrow onClick={onRightSliderClick} ref={Right}>
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </RightArrow>
    </Wraper>
  );
};

export default HomeSlider;
