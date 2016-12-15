import React, { Component } from 'react';
import './App.css';
import Board from './components/board';
import Square from './components/square';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>The Game of Life</h2>
          <Board></Board>
      </div>
    );
  }
}

export default App;
