import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeContext from '../../context/Context'; 
import { TextField } from '@mui/material';
import mockEmployees from '../../Mocks/Employees/Employees.mock';
import validateemployee from '../../validations/RegisterEmployees.validations';

function RegisterEmployee() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { employeeRegister, setEmployeeRegister } = useContext(EmployeeContext);

  function handleClick(event) {
    event.preventDefault();
    
    const error = validateemployee(employeeRegister);
    
    if (error) {
      setErrorMessage(error);
      return;
    }

    mockEmployees.push(employeeRegister);
    setEmployeeRegister({
      name: '',
      cpf: '',
      cel: '',
      office: '',
      wage: '',
      startDate: '',
      benefits: '',
      address: '',
    })

    console.log('Banco de dados employeees-->', mockEmployees)
    setErrorMessage("");
    navigate(`/`);
  }

  function handlePhone(event) {
    const inputPhone = event.target.value;
    const formattedPhone = inputPhone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  
    setEmployeeRegister((prevState) => ({ ...prevState, cel: formattedPhone }));
  }

  function handleCPF(event) {
    const inputCPF = event.target.value;
    const formattedCPF = inputCPF
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .slice(0, 14);
      
    setEmployeeRegister((prevState) => ({ ...prevState, cpf: formattedCPF }));
  }

  function handleWage(event) {
    const inputWage = event.target.value;
    const unformattedWage = inputWage.replace(/[^\d]/g, '');
    const formattedWage = (unformattedWage / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    setEmployeeRegister((prevState) => ({ ...prevState, wage: formattedWage }))
  
    if (unformattedWage < 132000) {
      setErrorMessage('O salário deve ser maior que R$ 1.320,00.');
    } else {
      setErrorMessage('');
    }
  }

  function handleDate(event) {
    const inputDate = event.target.value;
    const formattedDate = inputDate
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 10);
  
    setEmployeeRegister((prevState) => ({ ...prevState, startDate: formattedDate }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEmployeeRegister((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Cadastro de Colaborador
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-10">
        Preencha todas as informações para cadastrar um novo employeee
      </h1>

      {errorMessage && (
        <p className="text-red-500 mb-10">{errorMessage}</p>
      )}

      <form >
        <div className="grid gap-20 py-5 px-5 sm:mb-20 md:mb-16 sm:px-8 grid-cols-1 sm:grid-cols-2 sm:gap-12 max-w-screen-lg">
          <div>
            <TextField
              type="text"
              placeholder="Nome do colaborador"
              value={employeeRegister.name}
              name="name"
              id="outlined-basic"
              label="Digite o nome completo do colaborador"
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
                placeholder="CPF do colaborador"
                value={employeeRegister.cpf}
                name='cpf'
                id="outlined-basic"
                label="Digite o CPF do colaborador"
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
              type="text"
              placeholder="Telefone do colaborador"
              value={employeeRegister.cel}
              name="cel"
              id="outlined-basic"
              label="Digite o número de telefone do colaborador"
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
              type="tel"
              placeholder="Cargo"
              value={employeeRegister.office}
              name="office"
              id="outlined-basic"
              label="Digite o cargo do colaborador"
              variant="outlined"
              maxLength={11}
              inputProps={{
                pattern: '[0-9]*',
              }}
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
                type="text"
                placeholder="R$"
                value={employeeRegister.wage}
                name='wage'
                id="outlined-basic"
                label="Salário do colaborador"
                variant="outlined"
                maxLength={11}
                inputProps={{
                  pattern: '[0-9]*',
                }}
                onChange={handleWage}
                className="w-64 sm:w-72 md:w-80 xl:w-96"
                required
              />
          </div>

          <div>
            <TextField
              type="text"
              placeholder=""
              value={employeeRegister.startDate}
              name="startDate"
              id="outlined-basic"
              label="Data de início"
              variant="outlined"
              onChange={handleDate}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Benefícios"
              value={employeeRegister.benefits}
              name="benefits"
              id="outlined-basic"
              label="Benefícios do colaborador"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Endereço"
              value={employeeRegister.address}
              name="address"
              id="outlined-basic"
              label="Digite o endereço do colaborador"
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
            Cadastrar colaborador
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterEmployee;
