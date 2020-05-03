import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super();
    this.todoItems = ['eating', 'sleeping', 'eating and sleeping'];
    this.contents = [
      {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
      },
      {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
      },
      {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Australia'
      },
      {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
      }, 
    ]
  }
  render() {
    return (
      <div className="App">
          {this.todoItems.map((item, index) => <TodoItem key={index}  title={item} />)}   
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            {this.contents.map((item, index) => <tr><td>{item.company}</td><td>{item.contact}</td><td>{item.country}</td></tr>)}
          </table>
      </div>
    );
  }
}

export default App;
