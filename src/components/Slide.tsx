import React, { useCallback, useEffect } from "react";
import styled from "styled-components";

const StyledSlide = styled.div`
  display: none;
  position: relative;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1em;
    color: #ffffff;
    /* background-color: #000000; */
    font-weight: 600;
    padding: 0.5em 0;
    width: 100%;
    text-align: center;
  }
  img {
    max-width: 400px;
    height: auto;
    display: block;
    border: 1px solid #000000;
  }
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;

  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

interface SlideProps {
  title: string;
  images: string[];
  activeSlideIndex: number;
  index: number;
}

export const displayBlockSize = 4;

const Slide: React.FC<SlideProps> = ({
  title,
  images,
  activeSlideIndex,
  index,
}) => {
  const slideElRef = React.useRef<HTMLDivElement>(null);
  const imageUrl = images[Math.floor(Math.random() * 3)];

  // 0 => [0, 1, 2, 3]
  // 1 => [4, 5, 6, 7]
  // and so on
  const getFilledBlocks = (start: number, end: number) => {
    const blocks: number[] = [];
    for (let index = start; index <= end; index++) {
      blocks.push(index);
    }
    return blocks;
  };

  const isSlideIndexWithinRange = useCallback(
    (activeSlideIndex: number, slideIndex: number) => {
      return getFilledBlocks(
        activeSlideIndex * displayBlockSize,
        activeSlideIndex * displayBlockSize + (displayBlockSize - 1)
      ).includes(slideIndex);
    },
    []
  );

  useEffect(() => {
    if (slideElRef.current) {
      if (isSlideIndexWithinRange(activeSlideIndex, index)) {
        slideElRef.current.style.display = "block";
      } else {
        slideElRef.current.style.display = "none";
      }
    }
  }, [activeSlideIndex, slideElRef, index, isSlideIndexWithinRange]);

  return (
    <StyledSlide ref={slideElRef}>
      <div className="title">{title}</div>
      <img src={imageUrl} alt={imageUrl} key={imageUrl} />
    </StyledSlide>
  );
};
export default Slide;
