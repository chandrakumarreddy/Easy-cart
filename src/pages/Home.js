import React from "react";
import "styled-components/macro";
import Slider from "../utils/Slider";

const images = [
  "https://colorlib.com/preview/theme/divisima/img/bg.jpg",
  "https://colorlib.com/preview/theme/fashi/img/hero-3.jpg",
  "https://colorlib.com/preview/theme/violet/img/slider-1.jpg"
];

const Home = () => {
  return (
    <section>
      <Slider height="100vh" slides={images} />
      <h1>Hello</h1>
    </section>
  );
};
export default Home;
