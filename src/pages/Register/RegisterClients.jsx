import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../../context/Context'; 
import { TextField } from '@mui/material';
import mockClients from '../../Mocks/Clients/Clients.mock';
import validateClient from '../../validations/RegisterClients.validations';

function RegisterClient() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { clientRegister, setClientRegister } = useContext(ProductContext);

  function handleClick(event) {
    event.preventDefault();
    
    const error = validateClient(clientRegister);
    
    if (error) {
      setErrorMessage(error);
      return;
    }

    mockClients.push(clientRegister);
    setClientRegister({
      name: '',
      cpf: '',
      email: '',
      cel: '',
      address: '',
      neighbor: '',
      car: '',
      plate: '',
    })

    console.log('Banco de dados Clientes-->', mockClients)
    setErrorMessage("");
    navigate(`/`);
  }

  function handleCPF(event) {
    const inputCPF = event.target.value;
    const formattedCPF = inputCPF
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .slice(0, 14);

    setClientRegister((prevState) => ({ ...prevState, cpf: formattedCPF }));
  }

  function handlePhone(event) {
    const inputPhone = event.target.value;
    const formattedPhone = inputPhone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  
    setClientRegister((prevState) => ({ ...prevState, cel: formattedPhone }));
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setClientRegister((prevState) => ({ ...prevState, [name]: value }));
  }


  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Cadastro de Clientes
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-10">
        Preencha todas as informações para cadastrar um novo cliente
      </h1>

      {errorMessage && (
        <p className="text-red-500 mb-10">{errorMessage}</p>
      )}

      <form >
        <div className="grid gap-20 py-5 px-5 sm:mb-20 md:mb-16 sm:px-8 grid-cols-1 sm:grid-cols-2 sm:gap-12 max-w-screen-lg">
          <div>
            <TextField
              type="text"
              placeholder="Nome do cliente"
              value={clientRegister.name}
              name="name"
              id="outlined-basic"
              label="Digite o nome completo do cliente"
              variant="outlined"
              maxLength={11}
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
                type="text"
                placeholder="CPF do Cliente"
                value={clientRegister.cpf}
                name='cpf'
                id="outlined-basic"
                label="Digite o CPF do Cliente"
                variant="outlined"
                maxLength={14}
                inputProps={{
                  pattern: '[0-9]*',
                }}
                onChange={ handleCPF }
                className="w-64 sm:w-72 md:w-80 xl:w-96"
                required
              />
          </div>

          <div>
            <TextField
              type="email"
              placeholder="E-mail do cliente"
              value={clientRegister.email}
              name="email"
              id="outlined-basic"
              label="Digite o e-mail do cliente"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="tel"
              placeholder="Telefone"
              value={clientRegister.cel}
              name="cel"
              id="outlined-basic"
              label="Digite o número de telefone do cliente"
              variant="outlined"
              maxLength={11}
              inputProps={{
                pattern: '[0-9]*',
              }}
              onChange={handlePhone}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Endereço"
              value={clientRegister.address}
              name="address"
              id="outlined-basic"
              label="Digite o endereço do cliente"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Bairro"
              value={clientRegister.neighbor}
              name="neighbor"
              id="outlined-basic"
              label="Digite o bairro do cliente"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Modelo do Carro"
              value={clientRegister.car}
              name="car"
              id="outlined-basic"
              label="Digite o modelo do carro do cliente"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
                          required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Placa do Carro"
              value={clientRegister.plate}
              name="plate"
              id="outlined-basic"
              label="Digite a placa do carro do cliente"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>
        </div>

        <div className='flex justify-center items-center mb-16'>
          <button
            type='submit'
            className="w-1/4 py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none rounded-2xl"
            onClick={handleClick}
          >
            Cadastrar Cliente
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterClient;
