import React from "react";
import config from "../config";
import { ISongs, mapSongs } from "./map-songs";

export const loadSongs = async (
  genre: string,
  setData: React.Dispatch<React.SetStateAction<ISongs[]>>
): Promise<void> => {
  await fetch(`${config.shazam.url}?term=${genre}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": config.shazam.key,
    },
  })
    .then(async (res) => await res.json())
    .then((res) => mapSongs(res.tracks.hits))
    .then((res) => {
      setData(res);
      return res;
    });
};
