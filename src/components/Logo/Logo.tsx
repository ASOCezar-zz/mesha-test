import * as Styled from "./styles";

interface ILogo {
  image?: string;
}

export const LogoComponent = ({ image }: ILogo) => (
  <Styled.LogoWrapper>
    {image ? <img src={image} alt="Logo" /> : <h2> LOGO </h2>}
  </Styled.LogoWrapper>
);
