import config from "../config";

export const loadWeather = async (
  city: string,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
): Promise<{ temperature: number; city: string } | null> => {
  try {
    const data = await fetch(
      `${config.openWeather.url + city}&appid=${
        config.openWeather.key
      }&units=metric`
    );
    const json = await data.json();

    return { temperature: json.main.temp as number, city: json.name };
  } catch (err) {
    setIsError(true);
    return null;
  }
};
