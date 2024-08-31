import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Usar o BrowserRouter encapsulando o componente App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
