import "../styles/globals.css";
import NoSSR from "../components/NoSSR";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 720,
      lg: 960,
      xl: 1080,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NoSSR>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NoSSR>
  );
}

export default MyApp;
