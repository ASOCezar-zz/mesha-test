import styled, { css, keyframes } from "styled-components";

export const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `}
`;

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBlue};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${theme.media.desktop} {
      height: 600px;
    }

    &:after {
      content: "";
      position: absolute;

      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }
    &:after {
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.primaryColor};
      animation: ${rotate} 0.6s linear infinite;
    }
  `}
`;
