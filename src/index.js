import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FavoritesProvider } from './context/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <RouterProvider exact router={router} />
  </FavoritesProvider>
);
