import {
  FormEvent,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { FavoritesContext } from "../../contexts/FavoritesContext/context";
import { loadLocation } from "../../utils/load-location";
import { loadMusics } from "../../utils/load-musics";
import { loadWeather } from "../../utils/load-weather";
import { IMusics } from "../../utils/map-musics";
import { switchGenres } from "../../utils/switch-genres";
import FormSearch from "../FormSearch";
import MusicsSection from "../MusicsSection";
import * as Styled from "./styles";

export const MainContentComponent = () => {
  const [data, setData] = useState<IMusics[]>([]);

  const [querySystem, setQuerySystem] = useState<
    "myLocalization" | "city" | "coordenates" | "zipCode"
  >("myLocalization");
  const [searchValue, setSearchValue] = useState<string | string[]>("");
  const option = useRef() as MutableRefObject<HTMLInputElement>;

  const favoritesContext = useContext(FavoritesContext);
  const { setFavorites } = favoritesContext;

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    let query: string;

    const getQuery = async (): Promise<string> => {
      switch (querySystem) {
        case "city":
          query = `q=${searchValue}`;
          break;
        case "coordenates":
          query = `lat=${searchValue[0]}&lon=${searchValue[1]}`;
          break;
        case "zipCode":
          query = `zip=${searchValue}`;
          break;
        case "myLocalization":
          query = await loadLocation();
          break;
      }
      return query;
    };

    console.log(await getQuery());

    const weather = await loadWeather(await getQuery());

    if (weather === null) {
      console.warn("Failed to load temperature");
      return;
    }

    const { temperature, city } = weather;

    const genre = switchGenres(temperature);

    await loadMusics(genre, setData).then((res) =>
      document.getElementById("btnSave")?.addEventListener("click", () => {
        const date = new Date();
        const formattedDate = `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}`;
        const id = uuidv4();
        setFavorites((prevState) => [
          {
            id,
            musics: res,
            date: formattedDate,
            temperature: `${temperature}°C`,
            city: city,
            genre: genre,
          },
          ...prevState,
        ]);
      })
    );
  };

  return (
    <Styled.Main>
      <FormSearch
        setQuerySystem={setQuerySystem}
        handleSearch={handleSearch}
        setSearchValue={setSearchValue}
        option={option}
      />
      <MusicsSection musics={data} />
    </Styled.Main>
  );
};
