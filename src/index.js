import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home';
import { FavoritesProvider } from './context/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <RouterProvider router={router} />
  </FavoritesProvider>
);
