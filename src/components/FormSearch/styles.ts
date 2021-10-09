import styled, { css, keyframes } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    padding-inline: 10vw;
    padding-bottom: 40px;
    gap: 20px;
    background-color: ${theme.colors.ice};

    @media ${theme.media.desktop} {
      padding-top: 55px;
    }
  `}
`;

const openingOption = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
`;

type OpenedType = {
  openedCity: boolean;
  openedCoordenates: boolean;
  openedZipCode: boolean;
};

type WrapperProps = {
  opened: OpenedType;
};

const animateInputs = () => css`
  display: block;
  opacity: 0;
  transform-origin: top center;
  &:nth-child(1n) {
    animation: ${openingOption};
    animation-duration: 400ms;
    animation-delay: calc(150ms);
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  &:nth-child(2n) {
    animation: ${openingOption};
    animation-duration: 400ms;
    animation-delay: calc(150ms * 2);
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const setOpenedInput = ({
  openedCity,
  openedCoordenates,
  openedZipCode,
}: OpenedType) =>
  openedCity
    ? css`
        display: flex;
        flex-direction: column;
        width: 100%;
        perspective: 1000px;
        #typeCity {
          ${animateInputs()}
        }
      `
    : openedCoordenates
    ? css`
        display: flex;
        flex-direction: column;
        width: 100%;
        perspective: 1000px;
        #typeLatitude,
        #typeLongitude {
          ${animateInputs()}
        }
      `
    : openedZipCode
    ? css`
        display: flex;
        flex-direction: column;
        width: 100%;
        perspective: 1000px;
        #typeZip {
          ${animateInputs()}
        }
      `
    : css`
        #typeCity,
        #typeLatitude,
        #typeLongitude,
        #typeZip {
          display: none;
        }
      `;

export const Wrapper = styled.div<WrapperProps>`
  ${({ opened }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .inputs {
      display: none;
      ${setOpenedInput(opened)}
    }
  `}
`;
export const TypeInput = styled.input`
  ${({ theme }) => css`
    display: none;
    height: 50px;
    padding: 20px;
    outline: none;
    border: none;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryColor};
    transition: border 0.3s ease-out;

    :focus {
      border: 2px solid ${theme.colors.primaryColor};
    }

    ::placeholder {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primaryColor};
      opacity: 0.5;
    }
  `}
`;
export const Label = styled.label`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    font-size: clamp(1.4rem, 3.5vw, 2rem);
  `}
`;

export const Checkbox = styled.input`
  ${() => css`
    width: 25px;
    height: 25px;
    cursor: pointer;
  `}
`;
export const SubmitButton = styled.button`
  ${({ theme }) => css`
    border: none;
    align-self: center;
    background-color: ${theme.colors.primaryColor};
    width: 30%;
    height: 50px;
    cursor: pointer;
    color: ${theme.colors.ice};
    font-weight: ${theme.font.weight.extraBold};
    opacity: 0.8;
    transition: opacity 0.3s ease;

    :hover {
      opacity: 1;
    }
  `}
`;
