import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from './context/Favorites';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <BrowserRouter basename='/reacte'>
      <Routes>        
          <Route exact path="/reacte" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
);
