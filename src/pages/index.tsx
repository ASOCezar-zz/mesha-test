import type { NextPage } from "next";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { loadLocation } from "../utils/load-location";
import { loadMusics } from "../utils/load-musics";
import { loadWeather } from "../utils/load-weather";
import { switchGenres } from "../utils/switch-genres";

const Home: NextPage = () => {
  const data: unknown[] = [];

  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const searchInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleCheckboxChange = () => {
    setUseCurrentLocation((prevState: boolean) => !prevState);
    searchInput.current.toggleAttribute("disabled");
  };

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const city =
      useCurrentLocation === true
        ? await loadLocation()
        : searchInput.current.value;

    const temperature = await loadWeather({ city });

    const genre = switchGenres({ temperature });

    await loadMusics({ genre });
  };

  console.log(useCurrentLocation);

  return (
    <>
      <header>
        <img alt="Logo" />
      </header>
      <main>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            ref={searchInput}
            placeholder="Digite sua localização"
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
              <li className="Card Music" key={music.id}>
                <a href={music.url}>
                  <img src={music.image} alt="" />
                  <h2>{music.title}</h2>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <address> Made with ❤ by Cezar </address>
      </footer>
    </>
  );
};

export default Home;
