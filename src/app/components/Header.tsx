import { Box, Button, Option, Select, Typography } from "@mui/joy";
import { useIntl } from "../providers/IntlProvider";

export default function Header() {
  const { text, availableLanguages, language, setLanguage } = useIntl();

  return (
    <Box
      sx={{
        position: { xs: "relative", sm: "sticky" },
        top: "0",
        zIndex: 11,
        background: "#D9D3B8",
        boxShadow: "0px 0px 5px #00000080",
        py: { xs: 0.5, sm: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          maxWidth: 1920,
          margin: "auto",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <img height={20} src="src/assets/logo.svg" />
          <Typography>Márcio Medeiros</Typography>
        </Box>
        <Box>
          <Button component="a" variant="plain" href="#about">
            {text.about}
          </Button>
          <Button component="a" variant="plain" href="#web">
            {text.web}
          </Button>
          <Button component="a" variant="plain" href="#games">
            {text.games}
          </Button>
        </Box>
        <Select
          sx={{ height: 0 }}
          renderValue={(value) => {
            return (
              <>
                <img
                  src={`https://flagcdn.com/w20/${value?.value
                    .split("-")[1]
                    .toLowerCase()}.png`}
                />
              </>
            );
          }}
          defaultValue={language}
          onChange={(_, value) => {
            setLanguage(value ?? navigator.language);
          }}
        >
          {availableLanguages.map((language) => {
            return (
              <Option key={language} value={language}>
                <img
                  src={`https://flagcdn.com/w20/${language
                    .split("-")[1]
                    .toLowerCase()}.png`}
                />
                <Typography level="body-xs">
                  {new Intl.DisplayNames([language], { type: "language" }).of(
                    language,
                  )}
                </Typography>
              </Option>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
}
