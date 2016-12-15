import React, { Component } from 'react';
import '../styles/game.css';
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
        return (
            <div>
                <Board 
                    squares={this.state.squares} 
                    onClick={(i,j) => this.handleClick(i,j)}>
                </Board>
                <button 
                    className="control"
                    onClick={() => this.step()}>
                    Step
                </button>
                <button className="control"
                    onClick={() => this.run()}>
                    Run
                </button>
            </div>
        );
    }

    handleClick(i, j) {
        const squares = this.state.squares.map(function(row) {
            return row.slice();
        })
        squares[j][i] = true;
        this.setState({squares: squares});
    }

    /*
    * Sets an initial state of the board with certain squares initialized.
    */
    initializeSquares(squares) {
        this.setSquare(squares, 0, 0);
        this.setSquare(squares, 0, 1);
        this.setSquare(squares, 1, 0);
        this.setSquare(squares, 1, 3);
        this.setSquare(squares, 2, 1);
        this.setSquare(squares, 2, 2);
    }

    /*
    * Sets up an array of arrays to represents the squares on the board
    * and initializes all cells to false except for initial state.
    */
    setupSquares() {
        var size = 20;
        var squares = new Array(size);
        for (var i=0; i < squares.length; i++) {
            squares[i] = Array.apply(null, Array(size)).map(function() { return false});
        }
        this.initializeSquares(squares); // sets board to initial state
        return squares;
    }

    /*
    * Sets a square at a given location to alive.
    */
    setSquare(squares, i , j) {
        squares[j][i] = true;
    }

    /*
    * Progresses one step in the game of life.
    */
    step() {
        const squares = this.state.squares.map(function(row) {
            return row.slice();
        })
        for (var j = 0; j < squares.length; j++) {
            for (var i = 0; i < squares[j].length; i++) {
                countNeighbors(squares, i , j);
            }
        }
        this.setState({squares: squares});
    }

    /*
    * Continually steps through until there are no more alive cells.
    */ 
    run() {
        console.log("run!");
    }

    /*
    * Counts the number of neighbors for a given square
    */
    countNeighbors(squares, i, j) {
        var count = 0;
        if (this.isAlive(squares, i, j - 1)) { count += 1; }; // N
        if (this.isAlive(squares, i + 1, j - 1)) { count += 1; }; // NE
        if (this.isAlive(squares, i + 1, j)) { count += 1; }; // E
        if (this.isAlive(squares, i + 1, j + 1)) { count += 1; }; // SE
        if (this.isAlive(squares, i, j + 1)) { count += 1; }; // S
        if (this.isAlive(squares, i - 1, j + 1)) { count += 1; }; // SW
        if (this.isAlive(squares, i - 1, j)) { count += 1; }; // W
        if (this.isAlive(squares, i - 1 , j- 1)) { count += 1; }; // NW
        return count;
    }

    /*
    * Returns false if square is not alive and true if square is alive
    */
    isAlive(squares, i, j) {
        // edge cases
        if (j < 0 || j >= squares.length || i < 0 || i >= squares[j].length) {
            return false;
        }
        return squares[j][i];
    }
}

export default Game;
