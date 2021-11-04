import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import theme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
