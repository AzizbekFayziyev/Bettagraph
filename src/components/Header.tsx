import { BusinessCenterOutlined, PhoneOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// Header section
const Header = () => {
  // Responsive
  const mediaSm = useMediaQuery("(max-width: 520px)");

  return (
    <Container maxWidth="xl">
      <main className="header">
        <Box className="header__text">
          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            component="h1"
            variant="h4"
            gutterBottom
          >
            Biznesdagi muammolarni <span className="light">ZAMONAVIY</span>{" "}
            uslubda hal qiling
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            Mijozlarimizga o‘z biznesida zamonaviy dasturlar orqali xizmat
            ko‘rsatamiz va bizneslarni yangi bosqichga olib chiqishda yordam
            beramiz
          </Typography>

          <Stack
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
            className="header__actions"
            direction={mediaSm ? "column" : "row"}
          >
            <Button
              LinkComponent="a"
              href="#services"
              size="large"
              sx={{ mr: !mediaSm ? 3 : 0, mb: mediaSm ? 2 : 0 }}
              variant="outlined"
            >
              Xizmatlarimiz <BusinessCenterOutlined sx={{ ml: 1 }} />
            </Button>

            <Button
              LinkComponent="a"
              href="#contact"
              size="large"
              variant="contained"
            >
              Kontakt <PhoneOutlined sx={{ ml: 1 }} />
            </Button>
          </Stack>
        </Box>

        <img
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="900"
          src="./hero.png"
          alt="hero image"
        />
      </main>

      {mediaSm && (
        <img
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-offset="300"
          className="hero-mobile"
          src="./hero-mobile.png"
          alt="hero image"
        />
      )}
    </Container>
  );
};

export default Header;
