import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${theme.media.desktop} {
      min-height: 100vh;
      overflow-x: hidden;
    }
  `}
`;
