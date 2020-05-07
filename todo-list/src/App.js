import React, { Component } from 'react';
import './App.css';
// import TodoItem from './components/TodoItem'
// import CpnImage from './components/CpnImage'
// import TrafficLight from './components/TrafficLight'
// import BindingForm from './components/BindingForm'
// import ClikMe from './components/ClickMe'
import UpdateNum from './components/UpdateNum'

// const RED = 0;
// const YELLOW = 1;
// const GREEN = 2;
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     todoItems: [
  //       {title: 'eating', isComplete: false}, 
  //       {title: 'sleeping', isComplete: false}, 
  //       {title: 'eating and sleeping', isComplete: true}
  //     ]
  //   };
    // this.state = {currentColor: RED};
    // setInterval(() => {
    //     this.setState({
    //         currentColor: this.getNextColor(this.state.currentColor)
    //     })
    // }, 1000)
  // }

  // getNextColor(color) {
  //   switch(color) {
  //       case RED: return YELLOW
  //       case YELLOW: return GREEN
  //       default: return RED
  //   }
  // }

  // onItemClick(index) {
  //   var prevTodoItems = {...this.state.todoItems}
  //   prevTodoItems[index].isComplete = !prevTodoItems[index].isComplete
  //   this.setState({prevTodoItems})
  // }

  render() {
    // const { currentColor } = this.state
    return (
      <div className="App">
          {/* {this.state.todoItems.map((item, index) => 
            <TodoItem key={index}  item={item} onClick={() => this.onItemClick(index)} /> )} */}
          {/* {<CpnImage />} */}
          {/* <TrafficLight currentColor={currentColor}/> */}
          {/* {<BindingForm />} */}
          {/* {<ClikMe />} */}
          {<UpdateNum />}
      </div>
    );
  }
}

export default App;
