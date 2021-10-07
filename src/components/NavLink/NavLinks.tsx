import * as Styled from "./styles";
import Link from "next/link";

interface INavLinkProps {
  source: string;
  target: string;
}

export const NavLinkComponent = ({ source, target }: INavLinkProps) => {
  return (
    <Styled.Container>
      <Link href={source}>{target}</Link>
    </Styled.Container>
  );
};
