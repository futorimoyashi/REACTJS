import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
          {({ count }) => <h2>{count}</h2>}
        </Counter>
      </div>
    );
  }
}

export default App;
