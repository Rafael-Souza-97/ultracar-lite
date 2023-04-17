import React, { useContext } from 'react';
import ReactContext from '../context/Context';
import Header from '../components/Header';

function App() {
  const { hello } = useContext(ReactContext);

  console.log(hello)

  return (
    <>
      <h1>
        DEU BOM
      </h1>
    </>
  )
}

export default App;
