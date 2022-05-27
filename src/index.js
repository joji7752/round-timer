import "./index.css";
import App from "./App";
import SettingsContextProvider from "./context/SettingsContext";
import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
);
