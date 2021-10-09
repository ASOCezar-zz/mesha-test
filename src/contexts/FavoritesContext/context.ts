import { createContext, Dispatch } from "react";
import { InitialStateType } from ".";
import { initialState } from "./data";
import { PlaylistActions } from "./reducer";

export const FavoritesContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PlaylistActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
