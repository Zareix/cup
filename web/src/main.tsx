import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
);
