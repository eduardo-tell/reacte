import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from './context/Favorites';
import Layout from './Layout';
import Repo from './pages/Repo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/repositorio" element={<Repo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
);
