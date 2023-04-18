import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)`
  && {
    background-color: #4b5563;
    color: white;
    border-radius: 9999px;
    padding: 10px 20px;
    margin-top: 20px;

    &:hover {
      background-color: #1f2937;
    }
  }
`;

function RegisterProducts() {
  const navigate = useNavigate();
  const [clientRegister, setClientRegister] = useState({
    name: '',
    cpf: '',
    birth: '',
    cel: '',
    address: '',
    car: '',
    plate: '',
  });

  function handleClick(event) {
    event.preventDefault();
    navigate('/');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setClientRegister((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Cadastro de Produtos
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-10">
        Nesta área você poderá buscar por um produto específico
      </h1>
      <form className="mb-10">
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
            className="w-44 sm:w-52 md:w-80 xl:w-96"
          />
        </div>

        <div>
          <StyledButton onClick={handleClick}>
            Cadastrar
          </StyledButton>
        </div>
      </form>
    </div>
  );
}

export default RegisterProducts;
