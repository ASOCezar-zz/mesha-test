import type { NextPage } from "next";

const Home: NextPage = () => {
  const data: unknown[] = [];
  return (
    <>
      <header>
        <img alt="Logo" />
      </header>
      <main>
        <form>
          <input list="location" />
          <datalist id="location">
            <option value="Use my location" />
          </datalist>
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
