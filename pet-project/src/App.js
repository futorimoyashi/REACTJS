import React from 'react';
import TopMenu from './component/TopMenu'
import WheatherBoard from './component/WheatherBoard'
import Footer from './component/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <TopMenu />
      <WheatherBoard />
      <Footer />
    </div>
  );
}

export default App;
