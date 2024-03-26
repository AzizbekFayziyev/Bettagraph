import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { progressData } from "../data";

// Work progress section
const Progress = () => {
  const media = useMediaQuery("(max-width: 820px)");

  return (
    <Container maxWidth="xl">
      <section className="progress">
        <Typography variant="h6">Work progress</Typography>

        <div className="progress__stairs">
          {progressData.map((e) => (
            <React.Fragment key={e.number}>
              <div className="progress__stairs_content">
                {!media ? (
                  <Box
                    data-aos="flip-left"
                    data-aos-offset="300"
                    data-aos-duration="500"
                    data-aos-delay={e.number + 100}
                    sx={{ mr: 8 }}
                    className="progress__stairs_item primary"
                  >
                    {e.number}
                  </Box>
                ) : (
                  <div className="progress__stairs_mobItem">
                    <div
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="500"
                    >
                      {e.number}
                    </div>
                    <div
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="500"
                    ></div>
                    <div
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-duration="500"
                    ></div>
                  </div>
                )}

                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="600"
                  data-aos-delay={e.number + 100}
                  className="progress__stairs_text"
                >
                  <Typography variant="h5">{e.title}</Typography>
                  <Typography component="p">{e.desc}</Typography>
                </div>
              </div>

              <Box
                data-aos="flip-left"
                data-aos-offset="300"
                data-aos-duration="600"
                data-aos-delay={e.number + 100}
                className="progress__stairs_item"
              ></Box>
            </React.Fragment>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Progress;
