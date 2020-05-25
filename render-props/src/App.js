import React, { Component } from 'react';
import './App.css';
import Counter2 from './components/Counter2'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter>
          {({ count }) => <h2>{count}</h2>}
        </Counter> */}
        <Counter2 />
      </div>
    );
  }
}

export default App;
