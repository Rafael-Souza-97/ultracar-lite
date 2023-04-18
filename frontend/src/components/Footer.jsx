import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 flex-row w-full p-10 bg-gray-100 shadow-xl shadow-top text-white text-center z-10">
      <p className="px-8 font-medium text-gray-500 tracking-widest text-1xl">
        Criado por <a href="https://github.com/Rafael-Souza-97" target="_blank" rel="noreferrer"><span className="cursor-pointer font-medium text-gray-500 hover:text-black tech">Rafael Souza</span></a> utilizando <a href="https://react.dev/" target="_blank" rel="noreferrer" ><span className="cursor-pointer font-medium text-gray-500 hover:text-blue-400">React</span></a>, <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400 font">Tailwind</span></a>, <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" ><span className="cursor-pointer font-medium text-gray-500 hover:text-green-700">Node.js</span></a> e <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" ><span className="cursor-pointer font-medium text-gray-500 hover:text-orange-400">MySQL</span></a>
      </p> 
    </div>
  );
};

export default Footer;
