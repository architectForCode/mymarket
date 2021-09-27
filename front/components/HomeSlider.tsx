import styled from "styled-components";
import Image from "next/image";
import { SliderImages } from "../lib/images";

const SliderWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 100%);
  width: 100%;
  height: 360px;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
`;

const HomeSlider = () => {
  return (
    <SliderWrapper>
      {SliderImages.map((item, index) => (
        <Image
          key={index}
          src={item}
          alt="그림"
          width={1040}
          height={360}
        ></Image>
      ))}
    </SliderWrapper>
  );
};

export default HomeSlider;
