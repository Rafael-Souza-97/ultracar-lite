import React from 'react';
import { Link } from 'react-router-dom';
import template from '../../assets/UltraCar-Logos/uc-template.png';
import { cardHomeLinks } from '../../utils/navigate';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-1 bg-gray-50">
      <img src={template} alt="uc_template" className="w-full h-auto mt-5 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:max-w-2xl"/>
      <div className='max-w-xl'>
        <h1 className="text-gray-500 italic text-center text-xl font-light mt-5 ">
          Gere lucros de forma fácil e eficiente com o Ultracar<span className="font-medium text-cyan-500"> lite</span>
        </h1>
        <h1 className="text-gray-500 italic text-center text-xl font-light mb-5">
          - a solução simplificada para gerenciar sua oficina.
        </h1>
      </div>

      <div className="flex w-full justify-center mt-5 mb-5">
        <div className={`grid gap-20 py-10 px-5 mb-10 sm:mb-20 md:mb-16 sm:px-8 grid-cols-1 sm:grid-cols-2 sm:gap-20 max-w-screen-lg`}>
          { cardHomeLinks.map(({ id, name, href, style }) => (
            <Link key={id} to={href}>
              <div className={`shadow-md rounded-lg py-12 md:py-14 px-14 w-full ${style} duration-200 hover:scale-105 bg-gray-50 hover:bg-gray-100 text-center`}>
                <button className="align-center justify-center mb-3 duration-200 text-center opacity-90 hover:opacity-100 font-bold">
                  { name }
                </button>
              </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage;
