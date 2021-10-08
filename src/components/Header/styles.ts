import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors.mediumGray};
    align-items: center;
    justify-content: space-between;
    padding-inline: 40px;
  `}
`;
