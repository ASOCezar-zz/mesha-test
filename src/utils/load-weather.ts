import config from "../config";

interface ILoadWeatherProps {
  city: string;
}

export const loadWeather = async ({
  city,
}: ILoadWeatherProps): Promise<number> => {
  const data = await fetch(
    `${config.openWeather.url + city}&appid=${
      config.openWeather.key
    }&units=metric`
  );
  const json = await data.json();

  const weather = json.main.temp as number;

  return weather;
};
