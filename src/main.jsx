import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ComparisonTool from "./ComparisonTool.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComparisonTool />
  </StrictMode>
);
