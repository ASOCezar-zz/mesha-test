import config from "../config";
import { mapLocation } from "./map-location";

export const loadLocation = async (): Promise<string> => {
  const data = await fetch(config.extremeIpLookup.url);
  const json = await data.json();
  const result = mapLocation(json);

  return result;
};
