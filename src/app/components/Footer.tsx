import { Box, Typography, Link } from "@mui/joy";
import { useIntl } from "../providers/IntlProvider";

export default function Footer() {
  const { text } = useIntl();
  return (
    <Box sx={{ background: "#C98C5D" }}>
      <Box sx={{ maxWidth: 1920, margin: "auto", py: 1, px: 4 }}>
        <h2>{text.contact}:</h2>
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
            <Link href="https://github.com/MarcioMed07">MarcioMed07</Link>
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
  );
}
