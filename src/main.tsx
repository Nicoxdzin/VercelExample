import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    
    <React.StrictMode>
      <Analytics />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}