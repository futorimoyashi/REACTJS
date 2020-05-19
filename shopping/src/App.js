import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import TopMenu from './Components/TopMenu'
import Products from './pages/Products'

const Index = () => <h2>Home</h2>

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <TopMenu />
        <Route path="/" exact component={Index}/>
        <Route path="/products/" exact component={Products}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
