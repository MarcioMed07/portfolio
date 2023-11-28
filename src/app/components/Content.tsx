import { Box, Typography } from "@mui/joy";
import { useIntl } from "../providers/IntlProvider";
import Item from "../components/Item";
import { bgColors } from "../providers/content";

export default function Content() {
  const { content, text, about } = useIntl();
  const sections = Object.entries(content);
  const sectionSx = {
    p: 6,
    maxWidth: 1920,
    margin: "auto",
  };
  return (
    <Box color={(theme) => theme.palette.primary[50]}>
      <Box
        id={"about"}
        sx={{ background: bgColors.about, scrollMarginTop: 84 }}
      >
        <Box sx={sectionSx}>
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            }}
          >
            <img
              style={{ width: "250px", borderRadius: "100%", margin: "auto" }}
              src="src/assets/profile.jpg"
            />
            {about}
          </Box>
          <section>
            <h2>{text.projects}</h2>
          </section>
        </Box>
      </Box>
      {sections.map(([label, sectionContent]) => {
        const items = Object.values(sectionContent);
        return (
          <Box
            id={label}
            sx={{ background: bgColors[label], scrollMarginTop: 84 }}
          >
            <Box sx={{ ...sectionSx }}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "100px",
                  top: "-3em",
                  left: "-3em",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    background: "#000000aa",
                    height: "40px",
                    width: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    left: "-2.5em",
                    transform: "rotate(-45deg)",
                    zIndex: 10,
                    top: "1em",
                    boxShadow: "0px 2px 5px #00000080",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {text[label]}
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: "-6em",
                  justifyContent: "center",
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: {
                    sm: "repeat(auto-fit, minmax(530px, max-content))",
                  },
                }}
              >
                {items.map((item) => {
                  return <Item item={item} />;
                })}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
