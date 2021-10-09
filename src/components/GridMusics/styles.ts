import styled, { css } from "styled-components";
import { Title } from "../MusicCard/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 250px;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    #item-1:checked ~ .cards #song-5,
    #item-2:checked ~ .cards #song-1,
    #item-3:checked ~ .cards #song-2,
    #item-4:checked ~ .cards #song-3,
    #item-5:checked ~ .cards #song-4 {
      transform: translatex(clamp(-170px, -40%, 100px)) scale(0.8);
      opacity: 0.8;
      z-index: 1;
      audio {
        display: none;
      }

      & ${Title} {
        display: none;
      }
    }

    #item-1:checked ~ .cards #song-4,
    #item-2:checked ~ .cards #song-5,
    #item-3:checked ~ .cards #song-1,
    #item-4:checked ~ .cards #song-2,
    #item-5:checked ~ .cards #song-3 {
      transform: translatex(clamp(-260px, -80%, 100px)) scale(0.6);
      opacity: 0.4;
      z-index: 0;
      audio {
        display: none;
      }

      & ${Title} {
        display: none;
      }
    }

    #item-1:checked ~ .cards #song-3,
    #item-2:checked ~ .cards #song-4,
    #item-3:checked ~ .cards #song-5,
    #item-4:checked ~ .cards #song-1,
    #item-5:checked ~ .cards #song-2 {
      transform: translatex(clamp(260px, 80%, 100px)) scale(0.6);
      opacity: 0.4;
      z-index: 0;
      audio {
        display: none;
      }

      & ${Title} {
        display: none;
      }
    }

    #item-1:checked ~ .cards #song-2,
    #item-2:checked ~ .cards #song-3,
    #item-3:checked ~ .cards #song-4,
    #item-4:checked ~ .cards #song-5,
    #item-5:checked ~ .cards #song-1 {
      transform: translatex(clamp(170px, 40%, 100px)) scale(0.8);
      opacity: 0.8;
      z-index: 1;
      audio {
        display: none;
      }

      & ${Title} {
        display: none;
      }
    }

    #item-1:checked ~ .cards #song-1,
    #item-2:checked ~ .cards #song-2,
    #item-3:checked ~ .cards #song-3,
    #item-4:checked ~ .cards #song-4,
    #item-5:checked ~ .cards #song-5 {
      transform: translatex(0) scale(1);
      opacity: 1;
      z-index: 2;

      audio {
        position: absolute;
        transform: translateY(55vw) translateX(-50px);
        display: flex;
        width: 65vw;
        max-width: 430px;

        @media ${theme.media.desktop} {
          transform: translateY(370px) translateX(-70px);
        }
      }

      ${Title} {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: clamp(2.4rem, 3vw, 1.4rem);
          white-space: nowrap;
          font-weight: ${theme.font.weight.extraBold};
        }
      }

      img {
        box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
      }
    }

    input[type="radio"] {
      display: none;
    }
  `};
`;

export const Grid = styled.ul`
  ${() => css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  `}
`;
