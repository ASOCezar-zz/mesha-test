import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    height: 40px;
    background-color: ${theme.colors.primaryColor};
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.ice};
  `}
`;
