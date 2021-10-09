/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMusics } from "../../utils/map-musics";
import { Types } from "./types";

export interface IPlaylist {
  id: string;
  musics: IMusics[];
  date: string;
  temperature: string;
  city: string;
  genre: string;
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type PlaylistPayload = {
  [Types.ADD_PLAYLIST]: IPlaylist;
  [Types.DELETE_PLAYLIST]: {
    id: string;
  };
};

export type PlaylistActions =
  ActionMap<PlaylistPayload>[keyof ActionMap<PlaylistPayload>];

export const playlistReducer = (
  state: IPlaylist[],
  action: PlaylistActions
) => {
  switch (action.type) {
    case Types.ADD_PLAYLIST:
      window.localStorage.setItem(
        "favorite-playlist",
        JSON.stringify([
          ...state,
          {
            id: action.payload.id,
            musics: action.payload.musics,
            city: action.payload.city,
            date: action.payload.date,
            temperature: action.payload.temperature,
            genre: action.payload.genre,
          },
        ])
      );
      return [
        ...state,
        {
          id: action.payload.id,
          musics: action.payload.musics,
          city: action.payload.city,
          date: action.payload.date,
          temperature: action.payload.temperature,
          genre: action.payload.genre,
        },
      ];
    case Types.DELETE_PLAYLIST:
      window.localStorage.setItem(
        "favorite-playlist",
        JSON.stringify([
          ...state.filter((product) => product.id !== action.payload.id),
        ])
      );
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};
