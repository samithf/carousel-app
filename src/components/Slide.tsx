import React, { useEffect } from "react";
import styled from "styled-components";

const StyledSlide = styled.div`
  display: none;
  position: relative;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.2em;
    color: #ffffff;
    background-color: #000000;
    padding: 0.5em 0;
    width: 100%;
    text-align: center;
  }
  img {
    max-width: 800px;
    height: auto;
    display: block;
    border: 3px solid #000000;
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

const Slide: React.FC<SlideProps> = ({
  title,
  images,
  activeSlideIndex,
  index,
}) => {
  const slideElRef = React.useRef<HTMLDivElement>(null);
  const imageUrl = images[Math.floor(Math.random() * 3)];

  useEffect(() => {
    if (slideElRef.current) {
      if (index === activeSlideIndex) {
        slideElRef.current.style.display = "block";
      } else {
        slideElRef.current.style.display = "none";
      }
    }
  }, [activeSlideIndex, slideElRef, index]);

  return (
    <StyledSlide ref={slideElRef}>
      <div className="title">{title}</div>
      <img src={imageUrl} alt={imageUrl} key={imageUrl} />
    </StyledSlide>
  );
};

export default Slide;
