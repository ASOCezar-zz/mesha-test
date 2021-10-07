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

  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleCheckboxChange = () => {
    setUseCurrentLocation((prevState: boolean) => !prevState);
    searchInput.current.toggleAttribute("disabled");
  };

  const favoritesContext = useContext(FavoritesContext);
  const { setFavorites } = favoritesContext;

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const city =
      useCurrentLocation === true
        ? await loadLocation()
        : searchInput.current.value;

    const temperature = await loadWeather(city);

    if (temperature === null) {
      searchInput.current.classList.add("error");
      return;
    }

    searchInput.current.classList.remove("error");

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
        handleCheckboxChange={handleCheckboxChange}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />
      <MusicsSection musics={data} />
    </Styled.Main>
  );
};
