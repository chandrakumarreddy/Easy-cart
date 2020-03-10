import React from "react";
import "styled-components/macro";

export default function product({ product }) {
  return (
    <div
      css={`
        flex: 1 0 25%;
        box-sizing: border-box;
        padding: 10px;
      `}
    >
      <div className="card">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <section className="details">
          <div className="min-details">
            <h1>
              {product.brand}
              <span>{product.category}</span>
            </h1>
            <h1 className="price">$45.99</h1>
          </div>

          <div className="options">
            <div className="options-size">
              <h1>sizes</h1>
              <ul>
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
                <li>xl</li>
              </ul>
            </div>

            <div className="options-colors">
              <h1>colors</h1>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <a href="void(0)" className="btn">
            add to cart
          </a>
        </section>
      </div>
    </div>
  );
}
