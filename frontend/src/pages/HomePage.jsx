import React, { useContext } from 'react';
import ReactContext from '../context/Context';
import Header from '../components/Header';

function App() {
  const { hello } = useContext(ReactContext);

  console.log(hello)

  return (
    <div className="w-screen h-screen bg-blue-300">
      <Header />
    </div>
  )
}

export default App
