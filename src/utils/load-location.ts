import React from "react";
import config from "../config";
import { mapLocation } from "./map-location";

export const loadLocation = async (
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
): Promise<string | void> => {
  try {
    const data = await fetch(config.extremeIpLookup.url);
    const json = await data.json();
    const result = mapLocation(json);

    return result;
  } catch {
    setIsError(true);
  }
};
