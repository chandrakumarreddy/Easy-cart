import React from "react";
import "styled-components/macro";
import Slides from "./Slides";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";

const getWidth = () => window.innerWidth;
export default function Slider(props) {
  const transition = 0.45;
  const autoplayRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [translate, setTranslate] = React.useState(0);

  React.useEffect(() => {
    autoplayRef.current = nextSlide;
  });

  React.useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    if (props.autoplay) {
      const interval = setInterval(play, props.autoplay * 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoplay]);

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      setTranslate(0);
      setActiveIndex(0);
      return;
    }

    setActiveIndex(activeIndex + 1);
    setTranslate((activeIndex + 1) * getWidth());
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(props.slides.length - 1);
      setTranslate((props.slides.length - 1) * getWidth());
      return;
    }

    setActiveIndex(activeIndex - 1);
    setTranslate((activeIndex - 1) * getWidth());
  };
  return (
    <div
      css={`
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
      `}
    >
      <Slides
        width={getWidth() * props.slides.length}
        translate={translate}
        transition={transition}
      >
        {props.slides.map((slide, index) => (
          <Slide content={slide} key={index} />
        ))}
      </Slides>
      <Dots slides={props.slides} activeIndex={activeIndex} />
      {!props.autoplay && (
        <>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </>
      )}
    </div>
  );
}

Slider.defaultProps = {
  slides: [],
  autoplay: null
};
