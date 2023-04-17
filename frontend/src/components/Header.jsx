import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/uc-logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import links from '../utils/navigate';
import '../styles/Header.css';

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
      <div className="flex items-center flex-shrink-0 hover:text-cyan-900 cursor-pointer">
        <img src={logo} className="w-10 h-10 mr-2" alt="Logo" />
        <h1 to="/" className="font-semibold mt-1 text-xl tracking-tight text-cyan-700">
          UltraCar
        </h1>
      </div>
    
      <div className="hidden md:flex items-center justify-between flex-wrap md:flex-no-wrap px-5">
        <ul className="hidden md:flex">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-black hover:scale-105 duration-200 tech selector"
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
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {!nav ? <FiMenu className="mt-1 m-l-2" size={30} /> : <FiX size={30} />}
      </div>
    
      { nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-50 to-cyan-100 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl selector hover:text-black"
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
    
      <div className="hidden md:block">
        <button
          className="px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:ml-4"
        >
          Site Oficial
        </button>
      </div>
    </header>
  );
}

export default Header;
