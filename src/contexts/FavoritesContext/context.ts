import React, { createContext, SetStateAction } from "react";

import { IMusics } from "../../utils/map-musics";

export interface IFavorites {
  id: string;
  musics: IMusics[];
  date: string;
  temperature: string;
  city: string;
  genre: string;
}

export type GlobalFavorites = {
  favorites: IFavorites[];
  setFavorites: React.Dispatch<SetStateAction<IFavorites[]>>;
  // setUpdateFavorites: React.Dispatch<SetStateAction<boolean>>;
};

export const FavoritesContext = createContext<GlobalFavorites>({
  favorites: [],
  setFavorites: () => [],
  // setUpdateFavorites: () => false,
});
