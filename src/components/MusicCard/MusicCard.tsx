import { IMusics } from "../../utils/map-musics";
import * as Styled from "./styles";

interface IMusicCardProps {
  music: IMusics;
}

export const MusicCardComponent = ({ music }: IMusicCardProps) => (
  <Styled.Wrapper className="Card Music" key={music.title + music.artist}>
    <Styled.Anchor href={music.url}>
      <img src={music.coverImg} alt={music.title + "cover image"} />
      <h2>{music.title}</h2>
    </Styled.Anchor>
    <Styled.Audio controls>
      <source src={music.previewURL} type="audio/x-m4a" />
      Desculpe, seu navegador não suporta tags com link de audio.
    </Styled.Audio>
  </Styled.Wrapper>
);
