import { Box, Container, Grid, Typography } from "@mui/material";
import { serviceData } from "../data";

// Services section
const Services = () => {
  return (
    <Container maxWidth="xl">
      <section id="services" className="services">
        <Typography
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          variant="h6"
        >
          Xizmatlarimiz
        </Typography>

        <Grid justifyContent="center" spacing={3} container>
          {serviceData.map((e, id) => (
            <Grid
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-offset="100"
              data-aos-delay={200 * (id + 1)}
              sm={12}
              md={6}
              lg={4}
              key={id}
              item
            >
              <Box className="services__card">
                <Typography component="h5" variant="body1">
                  <e.icon /> {e.title}
                </Typography>
                <Typography component="p">{e.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};

export default Services;
