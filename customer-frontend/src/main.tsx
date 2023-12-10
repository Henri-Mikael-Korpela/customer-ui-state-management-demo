import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import PastriesIndexView from './components/PastriesIndexView.tsx';
import { PastrySingleView } from './components/PastrySingleView.tsx';
import "./main.css";
import { store } from './state_management.ts';

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
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
