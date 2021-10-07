import Logo from "../Logo";
import NavLink from "../NavLink";
import * as Styled from "./styles";

interface IHeaderProps {
  source: string;
  target: string;
}

export const HeaderComponent = ({ source, target }: IHeaderProps) => (
  <Styled.Container>
    <Logo />
    <NavLink source={source} target={target} />
  </Styled.Container>
);
