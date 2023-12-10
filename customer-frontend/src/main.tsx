import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import PastriesIndexView from './components/PastriesIndexView.tsx';
import { PastrySingleView } from './components/PastrySingleView.tsx';
import "./main.css";
import { initPastries, store } from './state_management.ts';

// Initialize the router with the routes we want to use.
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

// Initialize state with all pastries loaded from the API.
store.dispatch(initPastries());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
