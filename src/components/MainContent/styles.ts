import styled, { css } from "styled-components";

export const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 40px;
  `}
`;
