import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import PastriesIndexView from './PastriesIndexView.tsx';
import { PastrySingleView } from './PastrySingleView.tsx';
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PastriesIndexView />
  },
  {
    path: "/pastries/:pastryId",
    element: <PastrySingleView />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
