import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactContext from './Context';

function UltraCarProvider({ children }) {
  const [productRegister, setProductRegister] = useState({
    title: '',
    brand: '',
    price: '',
    qtde: '',
    serial: '',
    warehouse: '',
  });
  const [clientRegister, setClientRegister] = useState({
    name: '',
    cpf: '',
    email: '',
    cel: '',
    address: '',
    neighbor: '',
    car: '',
    plate: '',
  });
  const [employeeRegister, setEmployeeRegister] = useState({
    name: '',
    cpf: '',
    cel: '',
    office: '',
    wage: '',
    startDate: '',
    benefits: '',
    address: '',
  })

  const contextValue = {
    productRegister,
    clientRegister,
    employeeRegister,
    setProductRegister,
    setClientRegister,
    setEmployeeRegister,
  };

  return (
    <ReactContext.Provider value={ contextValue }>
      { children }
    </ReactContext.Provider>
  );
}

UltraCarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UltraCarProvider;
