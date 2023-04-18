import React from 'react';
import { Link } from 'react-router-dom';
import elevator from '../../assets/elevator.png';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 sm:py-44 xl:py-48 bg-gray-50">
      <img src={elevator} alt="elevator" className="h-56 sm:h-64 mb-8" />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Página não encontrada</h1>
      <p className="text-md px-10 sm:text-xl text-gray-600 mb-8 text-center">A página que você está procurando não existe.</p>
      <Link to={ '/' }>
        <button
          className="font-mono text-sm sm:text-base mt-1 px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 hover:text-cyan-200"
        >
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  )
}

export default NotFound;
