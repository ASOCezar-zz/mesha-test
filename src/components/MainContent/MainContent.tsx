import {
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [city, setCity] = useState<string>("");
  const [temperature, setTemperature] = useState<number>(0);
  const [genre, setGenre] = useState<string>("");

  const [querySystem, setQuerySystem] = useState<
    "myLocalization" | "city" | "coordenates" | "zipCode"
  >("myLocalization");

  const [searchValue, setSearchValue] = useState<string>("");

  const [geographicValue, setGeographicValue] = useState<{
    lat: string;
    long: string;
  }>({ lat: "", long: "" });

  const option = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    const getQuery = async (): Promise<string> => {
      const queries = {
        myLocalization: async () => `q=${await loadLocation()}`,
        city: () => `q=${searchValue}`,
        coordenates: () =>
          `lat=${geographicValue.lat}&lon=${geographicValue.long}`,
        zipCode: () => `zip=${searchValue}`,
      };

      return queries[querySystem]();
    };

    const weather = await loadWeather(await getQuery());

    if (weather === null) {
      console.warn("Failed to load temperature");
      return;
    }

    setTemperature(weather.temperature);

    setCity(weather.city);

    setGenre(switchGenres(temperature));
  };

  useEffect(() => {
    if (genre.length !== 0) {
      loadMusics(genre, setData);
    }
  }, [genre]);

  return (
    <Styled.Main>
      <FormSearch
        setQuerySystem={setQuerySystem}
        handleSearch={handleSearch}
        setSearchValue={setSearchValue}
        setGeographicValue={setGeographicValue}
        option={option}
        geographicValue={geographicValue}
      />
      <MusicsSection
        musics={data}
        temperature={temperature}
        city={city}
        genre={genre}
      />
    </Styled.Main>
  );
};
