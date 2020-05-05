import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import CpnImage from './components/CpnImage'

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'eating', isComplete: false}, 
      {title: 'sleeping', isComplete: false}, 
      {title: 'eating and sleeping', isComplete: true}
    ];
  }
  render() {
    return (
      <div className="App">
          {this.todoItems.map((item, index) => 
            <TodoItem key={index}  item={item} /> )}
          {<CpnImage />}
      </div>
    );
  }
}

export default App;
