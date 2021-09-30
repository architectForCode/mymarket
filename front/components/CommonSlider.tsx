import styled from "styled-components";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./HomeSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
`;
const SliderWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  border: 1px solid black;
`;

const styledLeft = styled(LeftArrow)`
  display: flex;
`;

const CommonSlider = () => {
  return (
    <Wrapper>
      <SliderWrapper>
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
        </li>
      </SliderWrapper>
      <LeftArrow>
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </LeftArrow>
      <RightArrow>
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </RightArrow>
    </Wrapper>
  );
};

export default CommonSlider;
