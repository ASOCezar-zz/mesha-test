/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMusics {
  title: string;
  artist: string;
  coverImg: string;
  previewURL: string;
  url: string;
}

export const mapMusics = (musics: any[]): IMusics[] => {
  const result: IMusics[] = [];
  musics.map((music) => {
    const objMusic: IMusics = {
      title: music.track.title,
      artist: music.track.subtitle,
      coverImg: music.track.images.coverart,
      previewURL: music.track.hub.actions[1].uri,
      url: music.track.url,
    };
    result.push(objMusic);
  });

  return result;
};
