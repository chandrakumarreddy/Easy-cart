import styled from "styled-components";

const Slides = styled.div`
  height: 100%;
  width: ${props => props.width}px;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  display: flex;
  overflow-x: hidden;
`;

export default Slides;
