import { IMusics } from "../../utils/map-musics";
import * as Styled from "./styles";

interface IMusicCardProps {
  music: IMusics;
  index: number;
}

export const MusicCardComponent = ({ music, index }: IMusicCardProps) => (
  <Styled.Wrapper
    className="card"
    key={music.title + music.artist}
    id={"song-" + (index + 1)}
    htmlFor={"item-" + (index + 1)}
  >
    <Styled.Title href={music.url} target="_blank">
      <h2> {music.title} </h2>
      <small> {music.artist} </small>
    </Styled.Title>
    <img src={music.coverImg} alt={music.title} />
    <Styled.Audio controls>
      <source src={music.previewURL} type="audio/x-m4a" />
      Desculpe, seu navegador não suporta tags com link de audio.
    </Styled.Audio>
  </Styled.Wrapper>
);
