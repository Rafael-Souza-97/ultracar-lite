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

  const contextValue = {
    productRegister,
    setProductRegister,
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
