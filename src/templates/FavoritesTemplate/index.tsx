import * as Styled from "./styles";
import Header from "../../components/Header";
import { IFavorites } from "../../contexts/FavoritesContext/context";

interface IFavoritesTemplateProps {
  favorites: IFavorites[];
  handleDelete: (id: string) => void;
}

export const FavoritesTemplate = ({
  favorites,
  handleDelete,
}: IFavoritesTemplateProps) => (
  <Styled.Container>
    <Header source="/" target="Home" />
    <ul>
      {favorites?.map((favorite) => (
        <li key={favorite.id}>
          <img src={favorite.musics[0].coverImg} />
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
  </Styled.Container>
);
