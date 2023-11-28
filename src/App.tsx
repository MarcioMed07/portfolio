import "./App.css";
import Header from "./app/components/Header";
import Content from "./app/components/Content";
import IntlProvider from "./app/providers/IntlProvider";
import {
  Box,
  CssBaseline,
  CssVarsProvider,
  Link,
  Typography,
  extendTheme,
} from "@mui/joy";

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
            <Box sx={{ background: "#C98C5D" }}>
              <Box sx={{ maxWidth: 1920, margin: "auto", py: 1, px: 4 }}>
                <h2>Fale Comigo:</h2>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "max-content max-content",
                    gap: "0 1em",
                    margin: "auto",
                    justifyContent: "center",
                    padding: "0 0 2em 0",
                    "> p": {
                      width: "fit-content",
                      fontSize: "1.2em",
                      color: "white",
                      fontWeight: 600,
                    },
                  }}
                >
                  <Typography>
                    Email:{" "}
                    <Link href="mailto:marciomed07@gmail.com">
                      marciomed07@gmail.com
                    </Link>
                  </Typography>
                  <Typography>
                    Github:{" "}
                    <Link href="https://github.com/MarcioMed07">
                      MarcioMed07
                    </Link>
                  </Typography>
                  <Typography>
                    Itch.io:{" "}
                    <Link href="https://marciomed07.itch.io/">MarcioMed07</Link>
                  </Typography>
                  <Typography>
                    LinkedIn:{" "}
                    <Link href="https://www.linkedin.com/in/marcio-medeiros/">
                      marcio-medeiros
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </IntlProvider>
      </CssVarsProvider>
    </>
  );
}

export default App;
