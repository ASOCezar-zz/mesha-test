import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </FavoritesProvider>
  );
}
export default MyApp;
