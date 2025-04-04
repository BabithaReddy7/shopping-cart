import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import createRoot
import App from "./App";
import "./styles.css";

// ✅ Use createRoot instead of ReactDOM.render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
