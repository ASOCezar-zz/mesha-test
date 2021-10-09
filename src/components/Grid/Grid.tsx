import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { ISongs } from "../../utils/map-songs";
import CarouselSongs from "../CarouselSongs";
import GridCard from "../GridCard";
import * as Styled from "./styles";

export const GridComponent = () => {
  const { state } = useContext(FavoritesContext);
  const { favorites } = state;

  const [clickedPlaylist, setClickedPlaylist] = useState<ISongs[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    clickedPlaylist.length ? setIsModalOpen(true) : setIsModalOpen(false);
  }, [clickedPlaylist]);

  return (
    <Styled.Main>
      {favorites.length ? (
        <Styled.Container>
          {favorites.map((favorite) => (
            <GridCard
              favorite={favorite}
              key={favorite.id}
              setClickedPlaylist={setClickedPlaylist}
            />
          ))}
        </Styled.Container>
      ) : (
        <Styled.Warn>Você não tem Playlists Salvas</Styled.Warn>
      )}
      <Styled.Modal isModalOpen={isModalOpen}>
        <Styled.ModalContent>
          <span>
            <h2> Músicas </h2>
            <button onClick={() => setClickedPlaylist([])} />
          </span>
          <CarouselSongs songs={clickedPlaylist} />
        </Styled.ModalContent>
      </Styled.Modal>
    </Styled.Main>
  );
};
