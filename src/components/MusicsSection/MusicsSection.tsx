import * as Styled from "./styles";
import GridMusics from "../GridMusics";
import SaveBtn from "../SaveBtn";
import { IMusics } from "../../utils/map-musics";

interface IMusicsSectionProps {
  musics: IMusics[];
}

export const MusicsSectionComponent = ({ musics }: IMusicsSectionProps) => (
  <Styled.Section>
    <GridMusics musics={musics} />
    <SaveBtn />
  </Styled.Section>
);
