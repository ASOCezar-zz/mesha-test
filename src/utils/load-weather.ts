import config from "../config";

export const loadWeather = async (city: string): Promise<number | null> => {
  try {
    const data = await fetch(
      `${config.openWeather.url + city}&appid=${
        config.openWeather.key
      }&units=metric`
    );
    const json = await data.json();

    const weather = json.main.temp as number;

    return weather;
  } catch (err) {
    return null;
  }
};
