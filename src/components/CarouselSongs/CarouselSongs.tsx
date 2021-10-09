import * as Styled from "./styles";
import { ISongs } from "../../utils/map-songs";
import SongCard from "../SongCard";

interface ICarouselSongsProps {
  songs: ISongs[];
}

export const CarouselSongsComponent = ({ songs }: ICarouselSongsProps) => (
  <Styled.Container>
    {songs.map((song, index) => {
      if (index === 0) {
        return (
          <input
            type="radio"
            name="slider"
            id={"item-" + (index + 1)}
            key={index + 1}
            defaultChecked
          />
        );
      }
      return (
        <input
          type="radio"
          name="slider"
          id={"item-" + (index + 1)}
          key={index + 1}
        />
      );
    })}
    <Styled.Grid className="cards">
      {songs.map((song, index) => (
        <SongCard song={song} key={song.title} index={index} />
      ))}
    </Styled.Grid>
  </Styled.Container>
);
