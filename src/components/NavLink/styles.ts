import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    a {
      font-weight: ${theme.font.weight.bold};
      text-transform: uppercase;
      color: ${theme.colors.primaryColor};
      cursor: pointer;
      transition: opacity 0.2s linear;

      :hover {
        opacity: 0.7;
      }
    }
  `}
`;
