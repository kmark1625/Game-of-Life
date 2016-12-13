import React, { Component } from 'react';
import '../styles/board.css';
import Square from './square';

class Board extends Component {
    constructor() {
        super();
        var size = 5;
        var squares = new Array(size);
        for (var i=0; i < squares.length; i++) {
            squares[i] = Array.apply(null, Array(size)).map(function() { return false});
        }
        this.state = {
            "squares": squares
        };
    }

    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        );
    }

    renderRows() {
        return this.state.squares.map((rows,j) => {
            var row = rows.map((square,i) => {
                return (<span>{this.renderSquare(i,j)}</span>);
            });
            return <div className="row">{row}</div>;
        })
    }

    renderSquare(i, j) {
        return <Square alive={this.state.squares[j][i]} onClick={() => this.handleClick(i,j)}></Square>;
    }

    handleClick(i, j) {
        const squares = this.state.squares.slice();
        squares[j][i] = true;
        this.setState({squares: squares});
    }
}

export default Board;
