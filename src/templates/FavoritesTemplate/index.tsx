import * as Styled from "./styles";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { Types } from "../../contexts/FavoritesContext/types";
import { IPlaylist } from "../../contexts/FavoritesContext/reducer";
import Grid from "../../components/Grid";

export const FavoritesTemplate = () => {
  const { dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    const localSave = window.localStorage.getItem("favorite-playlist");

    if (localSave !== null) {
      const json: IPlaylist[] = JSON.parse(localSave);
      dispatch({ type: Types.SET_PLAYLIST, payload: json });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Styled.Container>
      <Header source="/" target="Home" />
      <Grid />
    </Styled.Container>
  );
};
