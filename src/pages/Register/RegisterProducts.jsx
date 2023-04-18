import React, { useState, useContext } from 'react';
import ProductContext from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import validateProduct from '../../validations/RegisterProducts.validations';
import mockProducts from '../../Mocks/Products/Products.mock';

function RegisterProducts() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { productRegister, setProductRegister } = useContext(ProductContext);
  
  function handleClick(event) {
    event.preventDefault();
    
    const error = validateProduct(productRegister);
    
    if (error) {
      setErrorMessage(error);
      return;
    }
    mockProducts.push(productRegister);
    setProductRegister({
      title: '',
      brand: '',
      price: '',
      qtde: '',
      serial: '',
      warehouse: '',
    })

    console.log('Banco de dados -->', mockProducts)
    setErrorMessage("");
    navigate(`/`);
  }

  function handlePrice(event) {
    const inputPrice = event.target.value;
    const unformattedPrice = inputPrice.replace(/[^\d]/g, '');
    const formattedPrice = (unformattedPrice / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    setProductRegister((prevState) => ({ ...prevState, price: formattedPrice }))
  
    if (unformattedPrice < 100) {
      setErrorMessage('O preço deve ser maior que R$ 1,00.');
    } else {
      setErrorMessage('');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProductRegister((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="flex flex-col items-center mt-28">
      <h1 className="mb-14 text-gray-600 text-center text-4xl font-light">
        Cadastro de Produtos
      </h1>

      <h1 className="text-gray-600 text-center text-base sm:text-lg xl:text-xl font-light mb-10">
        Preencha todas as informações para cadastrar um novo producto
      </h1>

      {errorMessage && (
        <p className="text-red-500 mb-10">{errorMessage}</p>
      )}

      <form >
        <div className="grid gap-20 py-5 px-5 sm:mb-20 md:mb-16 sm:px-8 grid-cols-1 sm:grid-cols-2 sm:gap-12 max-w-screen-lg">
          <div>
            <TextField
              type="text"
              placeholder="Nome do produto"
              value={productRegister.title}
              name="title"
              id="outlined-basic"
              label="Nome completo do produto"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Marca do produto"
              value={productRegister.brand}
              name='brand'
              id="outlined-basic"
              label="Marca do produto"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="number"
              placeholder="Quantidade"
              value={productRegister.qtde}
              name="qtde"
              id="outlined-basic"
              label="Quantidade"
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
                value={productRegister.price}
                name='price'
                id="outlined-basic"
                label="Preço unitário"
                variant="outlined"
                maxLength={11}
                inputProps={{
                  pattern: '[0-9]*',
                }}
                onChange={handlePrice}
                className="w-64 sm:w-72 md:w-80 xl:w-96"
                required
              />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Número de série"
              value={productRegister.serial}
              name="serial"
              id="outlined-basic"
              label="Número de série do produto"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Estoque"
              value={productRegister.warehouse}
              name="warehouse"
              id="outlined-basic"
              label="Local de estoque do produto"
              variant="outlined"
              onChange={handleChange}
              className="w-64 sm:w-72 md:w-80 xl:w-96"
              required
            />
          </div>
        </div>

        <div className='flex justify-center items-center mb-28 xl:mb-36'>
          <button
            type='submit'
            className="w-1/4 py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none rounded-2xl"
            onClick={handleClick}
          >
            Cadastrar produto
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterProducts;

