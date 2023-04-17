import React from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
