import { ISongs } from "../../utils/map-songs";
import * as Styled from "./styles";

interface ISongCardProps {
  song: ISongs;
  index: number;
}

export const SongCardComponent = ({ song, index }: ISongCardProps) => (
  <Styled.Wrapper
    className="card"
    key={song.title + song.artist}
    id={"song-" + (index + 1)}
    htmlFor={"item-" + (index + 1)}
  >
    <Styled.Title href={song.url} target="_blank">
      <h2> {song.title} </h2>
      <small> {song.artist} </small>
    </Styled.Title>
    <img src={song.coverImg} alt={song.title} />
    <Styled.Audio controls>
      <source src={song.previewURL} type="audio/x-m4a" />
      Desculpe, seu navegador não suporta tags com link de audio.
    </Styled.Audio>
  </Styled.Wrapper>
);
