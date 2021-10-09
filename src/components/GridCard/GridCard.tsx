import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { IPlaylist } from "../../contexts/FavoritesContext/reducer";
import { Types } from "../../contexts/FavoritesContext/types";
import { ISongs } from "../../utils/map-songs";
import * as Styled from "./styles";

interface IGridCardProps {
  favorite: IPlaylist;
  setClickedPlaylist: React.Dispatch<React.SetStateAction<ISongs[]>>;
}

export const GridCardComponent = ({
  favorite,
  setClickedPlaylist,
}: IGridCardProps) => {
  const { dispatch } = useContext(FavoritesContext);

  const handleDelete = (id: string) => {
    dispatch({ type: Types.DELETE_PLAYLIST, payload: { id } });
  };

  return (
    <Styled.Container onClick={() => setClickedPlaylist(favorite.songs)}>
      <img src={favorite.songs[0].coverImg} />
      <Styled.Title> Playlist </Styled.Title>
      <p title="Save Data"> Salva em: {favorite.date}</p>
      <p> Gênero: {favorite.genre} </p>
      <p>Temperatura no momento da Pesquisa: {favorite.temperature}</p>
      <Styled.Button type="button" onClick={() => handleDelete(favorite.id)}>
        Delete
      </Styled.Button>
    </Styled.Container>
  );
};
