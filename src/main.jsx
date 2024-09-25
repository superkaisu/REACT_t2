import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import FindWord from "./components/FindWord";
import AddWord from "./components/AddWord";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

{
  /*const BrowserRouter = createBrowserRouter([
  // Add your routes here
  {
    path: "/",
    element: <Welcome />,
    element: <AddWord />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/find",
    element: <FindWord />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <AddWord />,
    errorElement: <ErrorPage />,
  },
]);*/
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
