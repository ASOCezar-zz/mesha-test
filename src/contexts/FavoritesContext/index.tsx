import React, { useEffect, useReducer } from "react";
import { FavoritesContext } from "./context";
import { initialState } from "./data";
import { playlistReducer, PlaylistActions, IPlaylist } from "./reducer";

export type InitialStateType = {
  favorites: IPlaylist[];
};

const mainReducer = (
  { favorites }: InitialStateType,
  action: PlaylistActions
) => ({
  favorites: playlistReducer(favorites, action),
});

export const FavoritesProvider: React.FC = ({ children }) => {
  useEffect(() => {
    const favorites = window.localStorage.getItem("favorite-playlist");
    if (favorites !== null) {
      const json = JSON.parse(favorites);
      initialState.favorites = json;
    }
  }, []);

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
