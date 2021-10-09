import React from "react";
import config from "../config";
import { IMusics, mapMusics } from "./map-musics";

export const loadMusics = async (
  genre: string,
  setData: React.Dispatch<React.SetStateAction<IMusics[]>>
): Promise<void> => {
  await fetch(`${config.shazam.url}?term=${genre}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": config.shazam.key,
    },
  })
    .then(async (res) => await res.json())
    .then((res) => mapMusics(res.tracks.hits))
    .then((res) => {
      setData(res);
      return res;
    });
};
