import React, { Component } from 'react';
import '../styles/board.css';
import Square from './square';

class Board extends Component {
    render() {
        return (
            <div>
                {this.renderRows()}
            </div>
        );
    }

    renderRows() {
        return this.props.squares.map((rows,j) => {
            var row = rows.map((square,i) => {
                return (<span>{this.renderSquare(i,j)}</span>);
            });
            return <div className="row">{row}</div>;
        })
    }

    renderSquare(i, j) {
        return <Square alive={this.props.squares[j][i]} onClick={() => this.props.onClick(i,j)}></Square>;
    }
}

export default Board;
