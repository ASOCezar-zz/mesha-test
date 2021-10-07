import { NextPage } from "next";
import { useContext } from "react";
import Header from "../components/Header";
import { FavoritesContext } from "../contexts/FavoritesContext/context";

const Favorites: NextPage = () => {
  const favoritesContext = useContext(FavoritesContext);
  const { favorites, setFavorites } = favoritesContext;

  const handleDelete = (id: string) => {
    const attFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(attFavorites);
  };

  return (
    <>
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
    </>
  );
};

export default Favorites;
