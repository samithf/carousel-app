import React from "react";
import styled from "styled-components";
import Slide, { displayBlockSize } from "./Slide";
import { Nav } from "./Nav";
import { ISlide } from "./../types";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  /* max-width: 1000px; */
  position: relative;
  margin: auto;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

interface CarouselProps {
  slides: ISlide[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  activeSlide,
  setActiveSlide,
}) => {
  const slide = (change: number) => {
    setActiveSlide(activeSlide + change);
  };

  return (
    <StyledCarousel>
      <Nav
        icon={"fa fa-arrow-left"}
        disabled={activeSlide === 0}
        onClickNav={() => slide(-1)}
      ></Nav>
      {slides.map(({ title, images }, index) => (
        <Slide
          title={title}
          images={images}
          activeSlideIndex={activeSlide}
          key={index}
          index={index}
        />
      ))}
      <Nav
        icon={"fa fa-arrow-right"}
        disabled={activeSlide === slides.length / displayBlockSize - 1}
        onClickNav={() => slide(1)}
      ></Nav>
    </StyledCarousel>
  );
};

export default Carousel;
