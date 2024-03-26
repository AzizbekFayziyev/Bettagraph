import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

// About section
const About = () => {
  const media = useMediaQuery("(max-width: 820px)");

  return (
    <Container maxWidth="xl">
      <section className="about" id="about">
        <div className="about__imgs">
          <img
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-offset="200"
            className="about__imgs_main"
            src="./about/1.png"
            alt="bettafish"
            data-aos-delay="200"
          />

          <img
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-offset="200"
            data-aos-delay="400"
            src="./about/2.png"
            alt="bettafish"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-offset="200"
            data-aos-delay="600"
            src="./about/3.png"
            alt="bettafish"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="300"
            data-aos-offset="200"
            data-aos-delay="800"
            src="./about/4.png"
            alt="bettafish"
          />
        </div>

        <Box className="about__text">
          <Typography
            textAlign={media ? "center" : "left"}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="200"
            variant="h6"
            gutterBottom
          >
            Biz haqimizda
          </Typography>

          <Typography
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
            data-aos-offset="200"
            component="p"
          >
            <span>BettaGraph</span> agentligi o‘z mijozlariga raqamli xizmat
            ko‘rsatadi. Bunda agentlikdagi dasturchi hamda dizaynerlar faoliyat
            olib boradi. Mijozlarimizga o‘z bizneslarini rivojlantirishda va
            boshqarishga qaratilgan{" "}
            <span>website, CRM, online do‘kon, telegram bot</span> dasturlarini
            tuzish orqali yordam beramiz.
          </Typography>

          <Box component="a" href="#contact">
            <Button
              fullWidth={media}
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="900"
              size="large"
              variant="contained"
            >
              Buyurtma berish
            </Button>
          </Box>
        </Box>
      </section>
    </Container>
  );
};

export default About;
