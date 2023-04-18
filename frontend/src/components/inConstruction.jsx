import React from 'react'
import { Link } from 'react-router-dom';
import construction from '../assets/NotFound/construction.png';

function InConstruction() {
  return (
    <div className="flex flex-col items-center justify-center md:py-20 lg:py-24 bg-gray-50">
      <div className="flex flex-col md:flex-row mb-10 mt-5">
        <img src={construction} alt="car service" className="h-40 md:h-56 lg:h-64 mb-4 md:mb-0 mx-auto md:mx-0 mr-0 md:mr-4" />
      </div>
    
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Página em construção</h1>
        <p className="text-md px-4 md:px-10 lg:text-xl text-gray-600 mb-8 text-center">A página que você está procurando ainda está sendo construída.</p>
      </div>
    
      <Link to="/">
        <button className="font-mono text-sm sm:text-base mt-1 px-4 py-3 mb-28 sm:mb-28 md:mb-40 lg:mb-28 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  )
}

export default InConstruction