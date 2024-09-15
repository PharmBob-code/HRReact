import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
