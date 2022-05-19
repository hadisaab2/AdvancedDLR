import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SourcesProvider } from "./Context/SourcesContext";
import { StyledEngineProvider } from "@mui/material/styles";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <SourcesProvider>
      <App />
    </SourcesProvider>
  </StyledEngineProvider>
);
