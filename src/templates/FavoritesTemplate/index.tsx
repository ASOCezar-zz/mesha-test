import * as Styled from "./styles";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { Types } from "../../contexts/FavoritesContext/types";
import { IPlaylist } from "../../contexts/FavoritesContext/reducer";

export const FavoritesTemplate = () => {
  const { state, dispatch } = useContext(FavoritesContext);
  const { favorites } = state;

  useEffect(() => {
    const localSave = window.localStorage.getItem("favorite-playlist");

    if (localSave !== null) {
      const json: IPlaylist[] = JSON.parse(localSave);
      dispatch({ type: Types.SET_PLAYLIST, payload: json });
    }
    //eslint-disable-next-line
  }, []);

  const handleDelete = (id: string) => {
    dispatch({ type: Types.DELETE_PLAYLIST, payload: { id } });
  };

  return (
    <Styled.Container>
      <Header source="/" target="Home" />
      {favorites.length ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              <img src={favorite.songs[0].coverImg} />
              <h2>Playlist {favorite.id} </h2>
              <span> Salva em: {favorite.date}</span>
              <span> Gênero: {favorite.genre} </span>
              <span>
                Temperatura no momento da Pesquisa: {favorite.temperature}
              </span>
              <button type="button" onClick={() => handleDelete(favorite.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Você não tem Playlists Salvas</div>
      )}
    </Styled.Container>
  );
};
