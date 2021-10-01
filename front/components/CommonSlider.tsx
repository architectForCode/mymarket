import styled from "styled-components";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./HomeSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 83%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
const SliderWrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 25%;
  grid-template-rows: 1fr;
  justify-items: center;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const StyledLeft = styled(LeftArrow)`
  display: flex;
`;

const StyledRight = styled(RightArrow)`
  display: flex;
`;

const CommonSlider = () => {
  const Slider = useRef<HTMLUListElement>(null);
  const ListItem = useRef<HTMLLIElement>(null);

  const LeftClick = () => {
    const SliderRef = Slider.current;
    if (SliderRef) {
      const originSpot = SliderRef.style.transform
        ? Number(SliderRef.style.transform.split("(")[1].split("px")[0])
        : 0;

      //일반 클릭
      SliderRef.style.transform = `translateX(-${
        -1 * originSpot - SliderRef.clientWidth
      }px)`;
    }
  };

  const RightClick = () => {
    const SliderRef = Slider.current;

    if (SliderRef) {
      const originSpot = SliderRef.style.transform
        ? Number(SliderRef.style.transform.split("(")[1].split("px")[0])
        : 0;

      //끝에 도달했을때
      if (-1 * originSpot >= SliderRef.scrollWidth - SliderRef.clientWidth) {
        return 0;
      }

      //일반 클릭
      SliderRef.style.transform = `translateX(-${
        -1 * originSpot + SliderRef.clientWidth
      }px)`;
    }
  };

  return (
    <Wrapper>
      <SliderWrapper ref={Slider}>
        <li ref={ListItem}>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>{" "}
        <li>
          <Image
            src={
              "https://kurly.s3.ap-northeast-1.amazonaws.com/%EB%A9%94%EC%9D%B8%EB%B3%B8%EC%B2%B4/%ED%85%8C%EC%8A%A4%ED%8A%B8.PNG"
            }
            width={250}
            height={320}
            alt="그림"
          />
        </li>
      </SliderWrapper>
      <StyledLeft onClick={LeftClick}>
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </StyledLeft>
      <StyledRight onClick={RightClick}>
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </StyledRight>
    </Wrapper>
  );
};

export default CommonSlider;
