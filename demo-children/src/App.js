import React, { Component } from 'react';
import './App.css';
// import Accordion from './components/Accordion'
// import { Button } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const index = () => <h2>Index</h2>
const about = () => <h2>About</h2>

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.inputElement = React.createRef();
  // }

  // componentDidMount() {
  //   this.inputElement.current.focus();
  // }

  render() {
    return (
      <div className="App">
        {/* <Accordion heading="heading">
          Children
        </Accordion> */}
        {/* <input type="text" ref={this.inputElement}/> */}
        {/* <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button> */}
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={index} />
          <Route path="/about" exact component={about} />
        </Router>
      </div>
    );
  }
}

export default App;
