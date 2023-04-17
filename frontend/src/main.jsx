import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home/HomePage';
import UltraCarProvider from './context/Provider';
import App from './App';
import Clients from './pages/NavBar/Clients';
import Products from './pages/NavBar/Products';
import Employees from './pages/NavBar/Employees';
import Services from './pages/NavBar/Services';
import NotFound from './pages/NotFound/NotFound';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UltraCarProvider>
      <Routes>
        <Route element={ <App /> }>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/client" element={ <Clients /> } />
          <Route path="/product" element={ <Products /> } />
          <Route path="/employee" element={ <Employees /> } />
          <Route path="/service" element={ <Services /> } />
        </Route>
          <Route path="*" element={ <NotFound /> } />
      </Routes>
    </UltraCarProvider>
  </BrowserRouter>
)
