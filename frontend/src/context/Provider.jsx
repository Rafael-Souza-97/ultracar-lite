import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactContext from './Context';

function UltraCarProvider({ children }) {
  const [hello, setHello] = useState('HELLO WORLD');

  const contextValue = {
    hello,
    setHello,
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
