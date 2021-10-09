import * as Styled from "./styles";
import GridMusics from "../GridMusics";
import SaveBtn from "../SaveBtn";
import { IMusics } from "../../utils/map-musics";

interface IMusicsSectionProps {
  musics: IMusics[];
  temperature: number;
  city: string;
  genre: string;
}

export const MusicsSectionComponent = ({
  musics,
  temperature,
  city,
  genre,
}: IMusicsSectionProps) => (
  <Styled.Section>
    <GridMusics musics={musics} />
    <SaveBtn
      musics={musics}
      temperature={temperature}
      city={city}
      genre={genre}
    />
  </Styled.Section>
);
