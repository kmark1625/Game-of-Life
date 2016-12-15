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
        console.log("step!");
    }

    /*
    * Continually steps through until there are no more alive cells.
    */ 
    run() {
        console.log("run!");
    }
}

export default Game;
