import config from "../config";

export const loadWeather = async (
  city: string
): Promise<
  { temperature: number; city: string } | "Error getting temperature"
> => {
  try {
    const data = await fetch(
      `${config.openWeather.url + city}&appid=${
        config.openWeather.key
      }&units=metric`
    );
    const json = await data.json();

    return { temperature: json.main.temp as number, city: json.name };
  } catch (err) {
    return "Error getting temperature";
  }
};
