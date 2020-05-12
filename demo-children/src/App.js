import React from 'react';
import './App.css';
import Accordion from './components/Accordion'

function App() {
  return (
    <div className="App">
      <Accordion heading="heading">
        Children
      </Accordion>
    </div>
  );
}

export default App;
