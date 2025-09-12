import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/App.css";
import { HashRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </HashRouter>
  </StrictMode>
);
