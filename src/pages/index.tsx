import type { NextPage } from "next";
import React, {
  FormEvent,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import { FavoritesContext } from "../contexts/FavoritesContext/context";
import { loadLocation } from "../utils/load-location";
import { loadMusics } from "../utils/load-musics";
import { loadWeather } from "../utils/load-weather";
import { IMusics } from "../utils/map-musics";
import { switchGenres } from "../utils/switch-genres";

const Home: NextPage = () => {
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
    <>
      <Header source="/favorites" target="favorites" />
      <main>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            ref={searchInput}
            placeholder="Digite sua cidade"
            required
          />
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => handleCheckboxChange()}
          />
          <button type="submit">Search</button>
        </form>
        <section className="musics">
          <ul>
            {data.map((music) => (
              <li className="Card Music" key={music.title + music.artist}>
                <a href={music.url}>
                  <img src={music.coverImg} alt={music.title + "cover image"} />
                  <h2>{music.title}</h2>
                </a>
                <audio controls>
                  <source src={music.previewURL} type="audio/x-m4a" />
                  Sorry, your browser does not support audio tags.
                </audio>
              </li>
            ))}
          </ul>
          <button type="button" id="btnSave">
            Salvar Playlist
          </button>
        </section>
      </main>
      <footer>
        <address> Made with ❤ by Cezar </address>
      </footer>
    </>
  );
};

export default Home;
