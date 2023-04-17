import React, { useContext } from 'react';
import ReactContext from '../context/Context';

function App() {
  const { hello } = useContext(ReactContext);

  console.log(hello)

  return (
    <div className="w-screen h-screen bg-blue-300">
      <h1>ULTRACAR</h1>
    </div>
  )
}

export default App
