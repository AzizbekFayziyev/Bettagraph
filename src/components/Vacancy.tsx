import { Send } from "@mui/icons-material";
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import sendMessage from "../FormSender";

// Vacancy section
const Vacancy = () => {
  const media = useMediaQuery("(max-width: 820px)");
  // Input values
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [stack, setStack] = useState("");
  // Clear values
  const clearValues = () => {
    setName("");
    setNumber("");
    setStack("");
  };

  return (
    <Container maxWidth="xl">
      <section
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-offset="100"
        className="vacancy"
        id="vacancy"
      >
        <div className="vacancy__content">
          <Typography variant="h6">Vakansiya</Typography>

          <Typography component="p">
            Agar siz <span>front end, back end developer</span> yoki
            <span> web dizayner</span> bo‘lsangiz siz bilan bog‘lanishimiz uchun
            o‘zingiz haqingizda ma’lumot qoldiring. Biz doim o‘z ustida
            ishlaydigan va jamoa bilan birga o‘sadigan xodimlarni qadrlaymiz!
          </Typography>

          <form
            onSubmit={(e) =>
              sendMessage(
                e,
                "Ismi",
                "Tel",
                "yo'nalishi",
                name,
                number,
                stack,
                clearValues
              )
            }
          >
            <TextField
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              size="small"
              className="input"
              color="info"
              variant="outlined"
              placeholder="Azizbek"
            />

            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+998</InputAdornment>
                ),
              }}
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              size="small"
              className="input"
              color="info"
              variant="outlined"
              type="tel"
              placeholder="99 999 99 99"
            />

            <TextField
              required
              onChange={(e) => setStack(e.target.value)}
              value={stack}
              size="small"
              className="input"
              color="info"
              variant="outlined"
              placeholder="Front end"
            />

            <Button
              type="submit"
              fullWidth={media}
              color="info"
              variant="contained"
            >
              Jo‘natish <Send sx={{ ml: 1 }} />
            </Button>
          </form>
        </div>

        <img src="./vacancy.png" alt="vacancy image" />
      </section>
    </Container>
  );
};

export default Vacancy;
