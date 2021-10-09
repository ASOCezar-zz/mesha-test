import styled, { css } from "styled-components";

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
