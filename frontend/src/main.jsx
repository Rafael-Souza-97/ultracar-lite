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
import RegisterClients from './pages/Register/RegisterClients';
import RegisterProducts from './pages/Register/RegisterProducts';
import RegisterEmployees from './pages/Register/RegisterEmployees';
import RegisterServices from './pages/Register/RegisterServices';
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
          <Route path="/register/client" element={ <RegisterClients /> } />
          <Route path="/register/product" element={ <RegisterProducts /> } />
          <Route path="/register/employee" element={ <RegisterEmployees /> } />
          <Route path="/register/service" element={ <RegisterServices /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </UltraCarProvider>
  </BrowserRouter>
)
