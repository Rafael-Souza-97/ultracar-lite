import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { headerLinks } from '../utils/navigate';
import logo from '../assets/UltraCar-Logos/uc-logo.png';

function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="flex p-5 justify-between bg-gray-100 shadow-lg">
      <Link to={ '/' }>
        <div className="flex items-center flex-shrink-0 hover:text-cyan-900 cursor-pointer">
          <img src={logo} className="w-10 h-10 mr-2" alt="Logo" />
          <h1 className="font-semibold mt-1 text-xl tracking-tight text-cyan-700">
            UltraCar
            <span className="text-cyan-500"> lite</span>
          </h1>
        </div>
      </Link>

      <div className="hidden lg:flex items-center justify-between flex-wrap md:flex-no-wrap px-5">
        <ul className="hidden lg:flex">
          {headerLinks.map(({ id, link, name }) => (
            <li
              key={ id }
              className="px-4 mt-2 cursor-pointer capitalize text-lg text-gray-500 hover:text-black hover:scale-105 duration-200 selector"
            >
              <Link to={ link }>
                { name }
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-gray-500 lg:hidden ml-auto pr-4"
      >
        {!nav ? <FiMenu className="mt-1" size={30} /> : <FiX size={30} />}
      </div>
    
      { nav && (
        <ul className="flex flex-col z-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-100 text-gray-500">
          {headerLinks.map(({ id, link, name }) => (
            <li
              key={ id }
              className="px-4 cursor-pointer capitalize py-6 text-4xl selector hover:text-black mt-2"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={ link }
              >
                { name }
              </Link>
            </li>
          ))}
        </ul>
      )}
    
      <Link to={ 'https://ultracarweb.com/' }>        
        <div className="hidden lg:block">
          <button
            className="font-mono text-sm mt-1 px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:ml-4"
          >
            UltraCar<span className="italic text-cyan-400">Web</span>
          </button>
        </div>
      </Link>
    </header>
  );
}

export default Header;
