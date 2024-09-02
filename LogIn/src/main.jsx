import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx'
import Topics from './Topics.jsx'
import Summary from './Summary.jsx'
import './index.css'
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "Login.jsx",
    element: <Login/>,
  },
  {
    path: "Summary.jsx",
    element: <Summary/>,
  },
  {
    path: "Topics.jsx",
    element: <Topics/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
