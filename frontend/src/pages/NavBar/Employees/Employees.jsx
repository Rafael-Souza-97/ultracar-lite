import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import QRCode from '../../../assets//QRCode/qrCode-employee.png';

function Employees() {
  const [searchedEmployee, setSearchedEmployee] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    setSearchedEmployee(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    if (searchedEmployee) {
      navigate(`/employee/${searchedEmployee}`);
    } else {
      navigate('/allemployees');
    }
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Área dos Colaboradores
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-10">
        Nesta área você poderá buscar um colaborador pelo nome
      </h1>
      <form onSubmit={handleSearchSubmit} className='flex mb-10'>
        <div>
          <TextField
            type="text"
            placeholder="Nome do colaborador"
            value={searchedEmployee}
            id="outlined-basic"
            label="Digite o nome do colaborador"
            variant="outlined"
            maxLength={11}
            inputProps={{
              pattern: '[0-9]*',
            }}
            onChange={handleSearch}
            className="w-44 sm:w-52 md:w-80 xl:w-96"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none right-rounded"
            onClick={handleClick}
          >
            Buscar
          </button>
        </div>
      </form>

      <div>
        <h1 className="text-gray-800 text-center font-bold text-xl mb-10">
          OU
        </h1>
        <button
          type='submit'
          className="w-full py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none rounded-2xl"
          onClick={handleClick}
        >
          Buscar todos os Colaboradores
        </button>
      </div>
  
      <div className='mt-24'>
        <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-5">
          Escaneie o <span className="font-medium text-black">QRCode</span> abaixo para fazer a busca do colaborador pelo celular
        </h1>
      </div>

      <img src={QRCode} alt="QR Code" className="h-64 w-64 mb-10 lg:mb-16" />
    </div>
  );
}

export default Employees;
