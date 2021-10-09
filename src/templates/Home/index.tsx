import * as Styled from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { IPlaylist } from "../../contexts/FavoritesContext/reducer";
import { Types } from "../../contexts/FavoritesContext/types";

export const Home = () => {
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
      <Header source="/favorites" target="Favoritos" />
      <MainContent />
      <Footer />
    </Styled.Container>
  );
};
