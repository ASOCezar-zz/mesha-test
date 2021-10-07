import config from "../config";

interface loadMusicsProps {
  genre: string;
}

export const loadMusics = async ({ genre }: loadMusicsProps): Promise<void> => {
  const data = await fetch(`${config.shazam.url}?term=${genre}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": config.shazam.key,
    },
  });

  const json = await data.json();

  const musics = json.tracks.hits;

  return musics;
};
