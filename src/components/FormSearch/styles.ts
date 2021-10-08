import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    gap: 20px;
    background-color: ${theme.colors.mediumGray};
  `}
`;
export const TypeInput = styled.input`
  ${({ theme }) => css`
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
export const Checkbox = styled.input`
  ${({ theme }) => css`
    width: 25px;
    height: 25px;
    cursor: pointer;
  `}
`;
export const SubmitButton = styled.button`
  ${({ theme }) => css``}
`;
