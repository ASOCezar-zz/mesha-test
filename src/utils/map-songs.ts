/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISongs {
  title: string;
  artist: string;
  coverImg: string;
  previewURL: string;
  url: string;
}

export const mapSongs = (musics: any[]): ISongs[] => {
  const result: ISongs[] = [];
  musics.map((song) => {
    const objSong: ISongs = {
      title: song.track.title,
      artist: song.track.subtitle,
      coverImg: song.track.images.coverart,
      previewURL: song.track.hub.actions[1].uri,
      url: song.track.url,
    };
    result.push(objSong);
  });

  return result;
};
