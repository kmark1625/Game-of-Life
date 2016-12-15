import React, { Component } from 'react';
import './App.css';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>The Game of Life</h2>
          <Game></Game>
      </div>
    );
  }
}

export default App;
