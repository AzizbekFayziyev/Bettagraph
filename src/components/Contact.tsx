import {
  Send,
  PhoneOutlined,
  LocationCityOutlined,
  EmailOutlined,
  YouTube,
  Facebook,
  Telegram,
  Instagram,
} from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import sendMessage from "../FormSender";
import { useState } from "react";

// Contact form section
const Contact = () => {
  const media = useMediaQuery("(max-width: 820px)");
  // Input values
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  // Clear values
  const clearValues = () => {
    setName("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="border" id="contact">
      <Container maxWidth="xl">
        <section className="contact">
          <form
            onSubmit={(e) =>
              sendMessage(
                e,
                "Ismi",
                "tel",
                "xabar",
                name,
                number,
                message,
                clearValues
              )
            }
            data-aos={media ? "zoom-in" : "fade-right"}
            data-aos-duration="500"
            data-aos-offset="100"
            className="contact__form"
          >
            <Typography variant="h6">Kontakt</Typography>

            <Typography component="p">
              Bizga istalgan vaqtda xabar qoldiring. Operatorlarimiz siz bilan
              tez orada bog‘lanishadi
            </Typography>

            <TextField
              onChange={(e) => setName(e.target.value)}
              fullWidth
              value={name}
              className="input"
              color="secondary"
              variant="standard"
              required
              label="Ismingiz"
            />
            <TextField
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              value={number}
              className="input"
              color="secondary"
              variant="standard"
              required
              label="Tel.raqam"
            />
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              value={message}
              className="input"
              color="secondary"
              variant="standard"
              required
              label="Xabar"
            />

            <Button
              type="submit"
              size="large"
              fullWidth
              color="secondary"
              variant="contained"
            >
              Yuborish <Send sx={{ ml: 1 }} />
            </Button>
          </form>

          <div
            data-aos={media ? "zoom-in" : "fade-left"}
            data-aos-duration="500"
            data-aos-offset="100"
            className="contact__info"
          >
            <Typography variant="h6">Info</Typography>

            <Typography component="p">
              <EmailOutlined /> bettagraph@gmail.com
            </Typography>

            <Typography component="p">
              <PhoneOutlined /> +998 99 449 01 00
            </Typography>

            <Typography
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/Mirzo+Ulugbek+metro,+76M5%2B3G+Ташкент/@41.2824132,69.2092893,18z/data=!3m1!4b1?entry=ttu"
                )
              }
              component="p"
            >
              <LocationCityOutlined /> Mirzo Ulugbek metro
            </Typography>

            <Stack direction="row" justifyContent="space-evenly" marginTop={8}>
              <IconButton color="secondary">
                <YouTube sx={{ color: "#fff", fontSize: 35 }} />
              </IconButton>
              <IconButton color="secondary">
                <Facebook sx={{ color: "#fff", fontSize: 35 }} />
              </IconButton>
              <IconButton
                LinkComponent="a"
                href="https://t.me/bettagraph"
                target="_blank"
                color="secondary"
              >
                <Telegram sx={{ color: "#fff", fontSize: 35 }} />
              </IconButton>
              <IconButton color="secondary">
                <Instagram sx={{ color: "#fff", fontSize: 35 }} />
              </IconButton>
            </Stack>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
