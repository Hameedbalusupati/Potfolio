import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.css";   // global styles
import "./App.css";            // app styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);