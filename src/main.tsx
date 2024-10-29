import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    
    <React.StrictMode>
      <SpeedInsights/>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}