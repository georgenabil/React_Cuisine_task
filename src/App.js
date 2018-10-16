import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Order from './Order/Order';
import Menu from './Menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Order />
          <Menu />
        </div>
      </div>
    )
  }
}
export default App;
