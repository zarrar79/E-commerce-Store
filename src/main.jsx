import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { TranslationProvider } from "./Context/TranslationContext.jsx";
import "./index.css"; // Import Tailwind styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </BrowserRouter>
  </StrictMode>
);
