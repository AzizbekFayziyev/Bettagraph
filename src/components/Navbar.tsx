import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { links } from "../data";
import { ArrowBack, Menu } from "@mui/icons-material";
import React, { useState } from "react";

// Navigation navbar
const Navbar = () => {
  // Responsive
  const mediaLg = useMediaQuery("(max-width: 1145px)");
  const mediaMd = useMediaQuery("(max-width: 980px)");
  const mediaSm = useMediaQuery("(max-width: 720px)");
  // mobile drawer
  const [drawer, setDrawer] = useState(false);

  const openDeawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  return (
    <>
      <AppBar
        data-aos="fade-down"
        data-aos-duration="800"
        sx={{ borderRadius: "0px 0px 14px 12px" }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, justifyContent: "space-between" }}>
            <img width={mediaLg ? 100 : 140} src="/logo.png" alt="bettagraph" />

            {!mediaSm && (
              <Box whiteSpace="nowrap">
                {links.map((e, id) => (
                  <Link href={e.link} key={id}>
                    <Button
                      sx={{ mr: mediaLg ? 0.5 : 2, p: mediaMd ? 1 : 2 }}
                      color="secondary"
                    >
                      <Typography
                        fontSize={mediaLg ? 16 : 18}
                        fontWeight={500}
                        color="text.primary"
                      >
                        {e.text}
                      </Typography>
                    </Button>
                  </Link>
                ))}
              </Box>
            )}

            {mediaSm && (
              <IconButton onClick={openDeawer} size="large" edge="end">
                <Menu fontSize="large" htmlColor="#290628" />
              </IconButton>
            )}

            {!mediaMd && (
              <Link
                fontWeight={500}
                fontSize={mediaLg ? 18 : 20}
                whiteSpace="nowrap"
                underline="hover"
                color="text.primary"
                href="tel:+998994490100"
              >
                +998 99 449 01 00
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile navigation */}
      <Drawer open={drawer} onClose={closeDrawer} anchor="right">
        <List
          subheader={
            <ListSubheader sx={{ background: "transparent" }}>
              <IconButton onClick={closeDrawer}>
                <ArrowBack htmlColor="#fff" />
              </IconButton>
            </ListSubheader>
          }
          sx={{ width: 260 }}
        >
          {links.map((e, id) => (
            <React.Fragment key={id}>
              <ListItemButton
                onClick={closeDrawer}
                sx={{ p: 1.5 }}
                href={e.link}
                LinkComponent="a"
              >
                <ListItemText
                  sx={{ textAlign: "center", color: "#fff" }}
                  primary={e.text}
                />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
