import React from "react";
import "styled-components/macro";

export default function Slide({ content }) {
  return (
    <div
      css={` height: 100%;
    width: 100%;
    background-image: url('${content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;`}
    />
  );
}
