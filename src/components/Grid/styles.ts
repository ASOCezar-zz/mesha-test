import styled, { css } from "styled-components";

export const Main = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `}
`;

export const Container = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: clamp(500px, 40vw, 200px);
    padding-block: 10vw;
    padding-inline: 3vw;
    gap: 10vw;

    @media ${theme.media.desktop} {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 50px;
      padding-block: 70px;
      height: 100%;
    }
  `}
`;

export const Warn = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.extraBold};
    color: ${theme.colors.primaryColor};
  `}
`;

type Modal = {
  isModalOpen: boolean;
};

export const Modal = styled.section<Modal>`
  ${({ theme, isModalOpen }) => css`
    transform: translatey(-100%);
    transition: all 0.5s ease;
    z-index: 2;
    ${isModalOpen &&
    css`
      transform: translatey(0);
    `}
    inset: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${theme.colors.ice};

    display: flex;
    flex-direction: column;
  `};
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    inset: -100vh;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    padding-top: 20px;
    padding-right: 20px;

    span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        border: none;
        border-radius: 100%;
        opacity: 0.8;
        width: 40px;
        height: 40px;
        background-image: url("https://www.svgrepo.com/show/273966/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;

        :active {
          opacity: 1;
        }
      }

      h2 {
        font-weight: ${theme.font.weight.extraBold};
        width: 100%;
        text-align: center;
      }
    }
  `};
`;
