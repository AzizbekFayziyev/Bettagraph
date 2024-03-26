import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { links } from "../data";
import {
  Facebook,
  Instagram,
  PhoneOutlined,
  Telegram,
  YouTube,
} from "@mui/icons-material";

// Footer Section
const Footer = () => {
  const media = useMediaQuery("(max-width: 820px)");
  const mediaMd = useMediaQuery("(max-width: 620px)");

  return (
    <footer>
      <Container maxWidth="xl">
        <Box>
          <Stack
            sx={{ ml: mediaMd ? 0 : 10 }}
            direction={mediaMd ? "column" : "row"}
            alignItems="center"
            justifyContent={!media ? "center" : "space-between"}
          >
            {!media && (
              <ul>
                {links.map((e, id) => (
                  <Link
                    marginTop={0.5}
                    fontWeight={500}
                    display="block"
                    color="text.primary"
                    underline="hover"
                    href={e.link}
                    key={id}
                  >
                    {e.text}
                  </Link>
                ))}
              </ul>
            )}

            <img
              width={mediaMd ? 200 : 250}
              src="./logo.png"
              alt="bettagraph logo"
            />

            <Box marginY={mediaMd ? 2 : 0}>
              <Typography fontWeight={500} gutterBottom>
                bettagraph@gmail.com
              </Typography>

              <Typography
                marginTop={2}
                display="flex"
                alignItems="center"
                fontWeight={500}
              >
                <PhoneOutlined sx={{ mr: 1 }} /> +998 99 449 01 00
              </Typography>

              <Stack justifyContent="center" direction="row" sx={{ mt: 2 }}>
                <IconButton
                  className="icon"
                  sx={{ background: "#003049", mr: 1 }}
                >
                  <YouTube sx={{ color: "#fff", fontSize: 18 }} />
                </IconButton>
                <IconButton
                  className="icon"
                  sx={{ background: "#003049", mr: 1 }}
                >
                  <Facebook sx={{ color: "#fff", fontSize: 18 }} />
                </IconButton>
                <IconButton
                  LinkComponent="a"
                  href="https://t.me/bettagraph"
                  target="_blank"
                  className="icon"
                  sx={{ background: "#003049", mr: 1 }}
                >
                  <Telegram sx={{ color: "#fff", fontSize: 18 }} />
                </IconButton>
                <IconButton
                  className="icon"
                  sx={{ background: "#003049", mr: 1 }}
                >
                  <Instagram sx={{ color: "#fff", fontSize: 18 }} />
                </IconButton>
              </Stack>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: mediaMd ? "#290628" : "#FDC5F5" }} />

          <Typography
            textAlign="center"
            padding={2}
            fontWeight={500}
            variant="body2"
            color="#6B6B6B"
          >
            2023 BettaGraph. All rights reserved
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
