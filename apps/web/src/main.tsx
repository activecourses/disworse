import App from "@/app";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResponsiveProvider } from "./providers/responsive-provider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ResponsiveProvider>
            <App />
        </ResponsiveProvider>
    </StrictMode>,
);
