import "./App.css";
import Header from "./app/components/Header";
import Content from "./app/components/Content";
import IntlProvider from "./app/providers/IntlProvider";
import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import Footer from "./app/components/Footer";

function App() {
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            "50": "#eeedeb",
            "100": "#d5d1ce",
            "200": "#b9b3ad",
            "300": "#9d958c",
            "400": "#887e73",
            "500": "#73675a",
            "600": "#6b5f52",
            "700": "#605448",
            "800": "#564a3f",
            "900": "#43392e",
          },
        },
      },
    },
  });
  return (
    <>
      <CssBaseline />
      <CssVarsProvider theme={theme}>
        <IntlProvider>
          <div className="App">
            <Header />
            <Content />
            <Footer />
          </div>
        </IntlProvider>
      </CssVarsProvider>
    </>
  );
}

export default App;
