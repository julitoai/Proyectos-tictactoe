import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Topics from "./Topics/Topics.jsx";
import Summary from "./Summary.jsx";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Api from "./Api.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Summary",
    element: <Summary />,
  },
  {
    path: "Topics",
    element: <Topics />,
  },
  {
    path: "Api",
    element: <Api />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
