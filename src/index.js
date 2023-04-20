import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.scss';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Repo from './pages/Repo';
import store from "./storage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/repositorio" element={<Repo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
