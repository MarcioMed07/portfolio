import CardContent from "@mui/joy/CardContent";
import { Box, Button, Card, Chip, Typography } from "@mui/joy";
import { useIntl } from "../providers/IntlProvider";

export interface ItemType {
  name: string;
  description: string;
  image: string;
  tech: string[];
  source?: string;
  url?: string;
}

export default function Item({ item }: { item: ItemType }) {
  const { text } = useIntl();
  return (
    <Box
      sx={{
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
        maxWidth: "calc(530px - 2em)",
        width: { xs: "300px", sm: "100%" },
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          height: "100%",
          background: (theme) => theme.palette.primary[50],
          flexDirection:{xs:"column", sm:"row"}
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "none", sm: 200 },
            zIndex: 9,
            minWidth: 182,
            transition: "transform .2s, object-fit .2s",
            ":hover": {
              transform: "scale(2.2)",
              zIndex: 11,
            },
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "scale-down",
              objectPosition: "top",
            }}
            src={item.image}
            loading="lazy"
            alt={item.name}
          />
        </Box>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {item.name}
          </Typography>
          <Typography level="body-md" fontWeight="lg" textColor="text.tertiary">
            {item.description}
          </Typography>
          <Box sx={{ mb: "calc(30px + 2em)" }}>
            {item.tech.map((tech) => (
              <Chip>{tech}</Chip>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              position: "absolute",
              bottom: "1em",
              right: "1em",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            {item.url && (
              <Button component="a" target="_blank" href={item.url}>
                {text.visit}
              </Button>
            )}
            {item.source && (
              <Button component="a" target="_blank" href={item.source}>
                {text.source}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
