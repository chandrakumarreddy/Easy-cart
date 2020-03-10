import React from "react";
import "styled-components/macro";

export default function Content() {
  return (
    <div
      css={`
        display: flex;
      `}
    >
      <div
        css={`
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        `}
      >
        <img
          src="https://colorlib.com/preview/theme/divisima/img/icons/1.png"
          alt="Fast secure payments"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h1>FAST SECURE PAYMENTS</h1>
      </div>
      <div
        css={`
          display: flex;
          flex: 1;
          background-color: #f51167;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          color: #fff;
        `}
      >
        <img
          src="https://colorlib.com/preview/theme/divisima/img/icons/2.png"
          alt="Fast secure payments"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h1>PREMIUM PRODUCTS</h1>
      </div>
      <div
        css={`
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
        `}
      >
        <img
          src="https://colorlib.com/preview/theme/divisima/img/icons/3.png"
          alt="Fast secure payments"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h1>FREE AND FAST DELIVERY</h1>
      </div>
    </div>
  );
}
