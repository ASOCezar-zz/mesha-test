import styled, { css } from "styled-components";

export const Container = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightBlue};
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.4s ease;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    img {
      max-height: 100%;
      max-width: 100%;
      width: 200px;
      height: 200px;
      border-radius: 20px;
      align-self: center;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 90px;
    height: 80px;
    align-self: center;
    border: none;
    background-color: ${theme.colors.warning};
    border-radius: 50%;
    color: white;
    font-weight: ${theme.font.weight.extraBold};
    opacity: 0.8;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    transition: opacity 0.1s linear;
    transition: box-shadow 0.1s linear;
    margin-top: 10px;
    z-index: 1;
    cursor: pointer;

    :active {
      opacity: 1;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
      transform: scale(0.9);
    }
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.font.weight.extraBold};
    font-size: clamp(
      ${theme.font.sizes.medium},
      3vw,
      ${theme.font.sizes.large}
    );
  `}
`;
