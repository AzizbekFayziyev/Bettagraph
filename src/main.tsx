import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

// Site theme
const siteTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#9508AE",
    },
    info: {
      main: "#73C1DD",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
