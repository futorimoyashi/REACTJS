import React, { Component } from 'react';
import './App.css';
// import TodoItem from './components/TodoItem'
// import tick from './img/tick.svg'
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
  //     newItem: '',
  //     todoItems: [
  //       {title: 'eating', isComplete: false}, 
  //       {title: 'sleeping', isComplete: false}, 
  //       {title: 'eating and sleeping', isComplete: true}
  //     ]
  //   }
  //   this.onKeyUp = this.onKeyUp.bind(this);
  //   this.onChange = this.onChange.bind(this);
  //   this.state = {currentColor: RED};
  //   setInterval(() => {
  //       this.setState({
  //           currentColor: this.getNextColor(this.state.currentColor)
  //       })
  //   }, 1000)
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
  // onItemClick(item) {
  //   return(event) => {
  //     const isComplete = item.isComplete
  //     const { todoItems } = this.state
  //     const index = todoItems.indexOf(item)
  //     this.setState({
  //       todoItems: [
  //         ...todoItems.slice(0, index),
  //         { ...item, isComplete: !isComplete},
  //         ...todoItems.slice(index + 1)
  //       ]
  //     })
  //   }
  // }

  // onKeyUp(event) {
  //   if(event.keyCode === 13) {
  //     let text = event.target.value;
  //     if(!text) {return;}
  //     text = text.trim();
  //     if(!text) {return;}
  //     this.setState({
  //       newItem: '',
  //       todoItems: [
  //         {title: text, isComplete: false},
  //         ...this.state.todoItems
  //       ]
  //     });
  //   }
  // }

  // onChange(event) {
  //   this.setState({
  //     newItem: event.target.value
  //   })
  // }

  componentDidUpdate() {
    console.log('App updated')
  }

  render() {
    // const { currentColor } = this.state
    // const { todoItems, newItem } = this.state
    console.log('App render')
    return (
      <div className="App">
          {/* <div className="Header">
            <img src={tick} width={32} height={32}/>
            <input 
              type="text" 
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange} 
              onKeyUp={this.onKeyUp}/>
          </div> */}
          {/* {todoItems.map((item, index) => 
            <TodoItem 
              key={index}  
              item={item} 
              // onClick={() => this.onItemClick(index)} 
              onClick={this.onItemClick(item)}
          /> )} */}
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
