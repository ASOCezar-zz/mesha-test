import * as Styled from "./styles";
import { v4 as uuidV4 } from "uuid";
import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { ISongs } from "../../utils/map-songs";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { Types } from "../../contexts/FavoritesContext/types";

interface ISaveBtnProps {
  songs: ISongs[];
  temperature: number;
  city: string;
  genre: string;
}

export const SaveBtnComponent = ({
  songs,
  temperature,
  city,
  genre,
}: ISaveBtnProps) => {
  const { dispatch } = useContext(FavoritesContext);
  const btnSave = useRef() as MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    if (songs.length === 0) {
      if (btnSave.current) {
        btnSave.current.setAttribute("disabled", "true");
      }
    } else {
      btnSave.current?.removeAttribute("disabled");
    }
  }, [songs]);

  const handleSave = () => {
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}`;
    dispatch({
      type: Types.ADD_PLAYLIST,
      payload: {
        id: uuidV4(),
        songs: songs,
        date: formattedDate,
        temperature: `${temperature}°C`,
        city: city,
        genre: genre,
      },
    });
    return;
  };

  return (
    <Styled.BtnSave
      ref={btnSave}
      type="button"
      id="saveBtn"
      onClick={() => handleSave()}
    >
      Salvar Playlist
    </Styled.BtnSave>
  );
};
