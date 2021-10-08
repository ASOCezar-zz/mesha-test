import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext/context";
import { FavoritesTemplate } from "../templates/FavoritesTemplate";

export default function Favorites() {
  const favoritesContext = useContext(FavoritesContext);
  const { favorites, setFavorites } = favoritesContext;

  const handleDelete = (id: string) => {
    const attFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(attFavorites);
  };

  return (
    <FavoritesTemplate favorites={favorites} handleDelete={handleDelete} />
  );
}
