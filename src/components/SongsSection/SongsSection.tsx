import * as Styled from "./styles";
import CarouselSongs from "../CarouselSongs";
import SaveBtn from "../SaveBtn";
import { ISongs } from "../../utils/map-songs";

interface ISongsSectionProps {
  songs: ISongs[];
  temperature: number;
  city: string;
  genre: string;
}

export const SongsSectionComponent = ({
  songs,
  temperature,
  city,
  genre,
}: ISongsSectionProps) => (
  <Styled.Section>
    <CarouselSongs songs={songs} />
    <SaveBtn
      songs={songs}
      temperature={temperature}
      city={city}
      genre={genre}
    />
  </Styled.Section>
);
