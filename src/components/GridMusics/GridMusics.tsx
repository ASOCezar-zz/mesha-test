import * as Styled from "./styles";
import { IMusics } from "../../utils/map-musics";
import MusicCard from "../MusicCard";

interface IGridMusicsProps {
  musics: IMusics[];
}

export const GridMusicsComponent = ({ musics }: IGridMusicsProps) => (
  <Styled.Grid>
    {musics.map((music) => (
      <MusicCard music={music} key={music.title} />
    ))}
  </Styled.Grid>
);
