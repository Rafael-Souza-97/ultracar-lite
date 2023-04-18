import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import QRCode from '../../../assets/qrCode.png';
import '../../../styles/Client.css';

function Client() {
  const [clientCPF, setClientCPF] = useState('');
  const [noDotCPF, setDotCPF] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    const inputCPF = event.target.value;
    const formattedCPF = inputCPF
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setClientCPF(formattedCPF);
    if (formattedCPF.length === 14) {
      const cpf = formattedCPF.replace(/\D/g, '');
      if (cpf.length === 11) {
        setDotCPF(cpf);
        setErrorMessage('');
      } else {
        setErrorMessage('O CPF deve ter 11 caracteres.');
      }
    }
  }

  function handleClick(event) {
    event.preventDefault();
    if (errorMessage) {
      return;
    }
    const cpf = clientCPF.replace(/\D/g, '');
    if (cpf.length !== 11) {
      setErrorMessage('O CPF deve ter 11 caracteres.');
    } else {
      setErrorMessage('');
      setDotCPF(cpf);
      navigate(`/client/${noDotCPF}`);
    }
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Área do Cliente
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-14">
        Nesta área você poderá buscar os dados de um cliente através do CPF
      </h1>
      <form onSubmit={handleSearchSubmit} className='flex'>
        <div>
          <TextField
            type="text"
            placeholder="CPF do Cliente"
            value={clientCPF}
            id="outlined-basic"
            label="Digite o CPF do Cliente"
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
            size="large"
            variant="contained"
            className="w-full py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none right-rounded"
            onClick={handleClick}
          >
            Acessar
          </button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-500 mt-5">{errorMessage}</p>
      )}

      <div className='mt-10'>
        <h1 className="text-gray-800 text-center font-bold text-xl mb-10">
          OU
        </h1>
        <button
          type='submit'
          className="w-full py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none rounded-2xl"
          onClick={() => navigate('/allclients')}
        >
          Buscar todos os Clientes
        </button>
      </div>

      <div className='mt-24'>
        <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-5">
          Escaneie o <span className="font-medium text-black">QRCode</span> abaixo para fazer a busca do cliente pelo celular
        </h1>
      </div>

      <img src={QRCode} alt="QR Code" className="h-64 w-64 mb-10 lg:mb-16" />
    </div>
  );
}

export default Client;
