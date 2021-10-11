import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.label`
  ${() => css`
    position: absolute;
    width: 40vw;
    max-width: 265px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.4s ease;
    cursor: pointer;
    list-style: none;
    white-space: nowrap;
  `}

  img {
    width: 100%;
    height: 100%;
    max-width: 265px;
    max-height: 265px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const Audio = styled.audio`
  margin-top: 40px;
`;

const titleAnimation = keyframes`
  from {transform: translatex(20px)}
  to {transform: translatex(-400px)}
`;

export const Title = styled.a`
  ${() => css`
    overflow: hidden;
    h2 {
      animation: ${titleAnimation} 5.5s linear infinite;
    }
  `}
`;
