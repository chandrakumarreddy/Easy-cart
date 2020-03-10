import React from "react";
import "styled-components/macro";
import Slider from "../utils/Slider";
import Content from "../components/Content";
import Products from "../components/Products";

const images = [
  "https://colorlib.com/preview/theme/divisima/img/bg.jpg",
  "https://colorlib.com/preview/theme/fashi/img/hero-3.jpg",
  "https://colorlib.com/preview/theme/violet/img/slider-1.jpg"
];

const latestProducts = [
  {
    id: 1,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/1.jpg",
    category: "Ladies Top"
  },
  {
    id: 2,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/2.jpg",
    category: "Ladies Top"
  },
  {
    id: 3,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/3.jpg",
    category: "Ladies Top"
  },
  {
    id: 4,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/4.jpg",
    category: "Ladies Top"
  },
  {
    id: 5,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/5.jpg",
    category: "Ladies Top"
  },
  {
    id: 6,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/6.jpg",
    category: "Ladies Top"
  },
  {
    id: 7,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/7.jpg",
    category: "Ladies Top"
  },
  {
    id: 8,
    brand: "Denim",
    name: "Flamboyant pink top",
    image: "https://colorlib.com/preview/theme/divisima/img/product/8.jpg",
    category: "Ladies Top"
  }
];

const Home = () => {
  return (
    <section>
      <Slider height="100vh" slides={images} />
      <Content />
      <div css={"margin:40px 0"}>
        <h1
          css={`
            margin-bottom: 20px;
            text-align: center;
            font-size: 36px;
          `}
        >
          LATEST PRODUCTS
        </h1>
        <Products products={latestProducts} />
      </div>
    </section>
  );
};
export default Home;
