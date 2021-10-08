import styled, { css } from "styled-components";

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    h2 {
      font-weight: ${theme.font.weight.extraBold};
      color: ${theme.colors.primaryColor};
      text-transform: uppercase;
    }
  `}
`;
