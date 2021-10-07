interface ILogo {
  image?: string;
}

export const LogoComponent = ({ image }: ILogo) => (
  <>{image ? <img src={image} alt="Logo" /> : <h2> LOGO </h2>}</>
);
