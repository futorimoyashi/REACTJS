import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import TopMenu from './components/TopMenu'
import Products from './pages/Products'

import { CartProvider } from './contexts/Cart'

const Index = () => <h2>Home</h2>

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div>
            <TopMenu />
            <Route path="/" exact component={Index}/>
            <Route path="/products/" exact component={Products}/>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
