import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(50px, 30vw, 110px);
    width: 100%;
    max-width: 1024px;
    height: calc(100vw + 70px);
    padding: 30px 10px;
    background-color: ${theme.colors.lightBlue};

    @media ${theme.media.desktop} {
      height: 100%;
      gap: 150px;
    }
  `}
`;
