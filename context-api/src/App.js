import React from 'react';
import './App.css';
import {NumberProvider} from './contexts/NumberContext'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <NumberProvider>
      <div className="App">
        <RandomNumber />
      </div>
    </NumberProvider>
  );
}

export default App;
