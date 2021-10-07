import { FavoritesContext, IFavorites } from "./context";
import { useEffect, useState } from "react";

type FavoritesProviderProps = {
  children: React.ReactNode;
};

function getStorageValue(key: string, defaultValue: IFavorites[]) {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem(key);
    if (saved) {
      const initial = JSON.parse(saved);
      return initial;
    }
    return defaultValue;
  }
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<IFavorites[]>(() =>
    getStorageValue("favorites-playlist", [])
  );

  useEffect(() => {
    localStorage.setItem("favorites-playlist", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
