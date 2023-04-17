import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import UltraCarProvider from './context/Provider';
import App from './App';
import Client from './pages/Client';
import Products from './pages/Products';
import Collabolators from './pages/Collabolators';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UltraCarProvider>
      <Routes>
        <Route element={ <App /> }>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/cliente" element={ <Client /> } />
          <Route path="/produtos" element={ <Products /> } />
          <Route path="/colaboradores" element={ <Collabolators /> } />
          <Route path="/servicos" element={ <Services /> } />
        </Route>
          <Route path="*" element={ <NotFound /> } />
      </Routes>
    </UltraCarProvider>
  </BrowserRouter>
)
