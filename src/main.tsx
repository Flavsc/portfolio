import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/main.scss";
import App from "./App.tsx";
import ErrorBoundary from "@components/validations/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
