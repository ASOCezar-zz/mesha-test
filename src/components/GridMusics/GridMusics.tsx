import * as Styled from "./styles";
import { IMusics } from "../../utils/map-musics";
import MusicCard from "../MusicCard";

interface IGridMusicsProps {
  musics: IMusics[];
}

export const GridMusicsComponent = ({ musics }: IGridMusicsProps) => (
  <Styled.Container>
    {musics.map((musics, index) => {
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
      {musics.map((music, index) => (
        <MusicCard music={music} key={music.title} index={index} />
      ))}
    </Styled.Grid>
  </Styled.Container>
);
