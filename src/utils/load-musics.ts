import config from "../config";
import { IMusics, mapMusics } from "./map-musics";

interface loadMusicsProps {
  genre: string;
}

export const loadMusics = async ({
  genre,
}: loadMusicsProps): Promise<IMusics[]> => {
  const data = await fetch(`${config.shazam.url}?term=${genre}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": config.shazam.key,
    },
  });

  const json = await data.json();

  const result = json.tracks.hits;
  const musics = mapMusics(result);

  return musics;
};
