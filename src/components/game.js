import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
    constructor() {
        super();
        var squares = this.setupSquares();

        this.state = {
            iteration: 0,
            squares: squares
        }
    }

    render() {
        return (<Board squares={this.state.squares} onClick={(i,j) => this.handleClick(i,j)}></Board>);
    }

    handleClick(i, j) {
        const squares = this.state.squares.slice();
        squares[j][i] = true;
        this.setState({squares: squares});
    }

    //Sets an initial state of the board as coded.
    initializeSquares(squares) {
        this.setSquare(squares, 0, 0);
        this.setSquare(squares, 0, 1);
        this.setSquare(squares, 1, 0);
        this.setSquare(squares, 1, 3);
        this.setSquare(squares, 2, 1);
        this.setSquare(squares, 2, 2);
    }

    // Sets up an array of arrays to represents the squares on the board
    // and initializes all cells to false except for initial state.
    setupSquares() {
        var size = 20;
        var squares = new Array(size);
        for (var i=0; i < squares.length; i++) {
            squares[i] = Array.apply(null, Array(size)).map(function() { return false});
        }
        this.initializeSquares(squares); // sets board to initial state
        return squares;
    }

    setSquare(squares, i , j) {
        squares[j][i] = true;
    }
}

export default Game;
