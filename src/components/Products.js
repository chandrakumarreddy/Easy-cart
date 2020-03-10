import React from "react";
import "styled-components/macro";
import Product from "./Product";

export default function Products({ products }) {
  return (
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        margin: 0 30px;
      `}
    >
      {products.map(_product => (
        <Product product={_product} key={_product.id} />
      ))}
    </div>
  );
}
