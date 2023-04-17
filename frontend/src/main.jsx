import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import UltraCarProvider from './context/Provider';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UltraCarProvider>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </UltraCarProvider>
  </BrowserRouter>
)
