import styled, { css } from "styled-components";

export const BtnSave = styled.button`
  ${({ theme }) => css`
    border: none;
    min-width: 130px;
    max-height: 90px;
    height: 55%;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.ice};
    font-size: inherit;
    font-weight: ${theme.font.weight.bold};
    position: relative;
    user-select: none;
    cursor: pointer;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }

    :active {
      background-color: ${theme.colors.green};
      color: transparent;

      :after {
        content: "Salva";
        color: white;
        position: absolute;
        inset-inline: -50%;
      }
    }

    :disabled {
      display: none;
    }
  `}
`;
