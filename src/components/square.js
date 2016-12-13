import React, { Component } from 'react';
import '../styles/square.css'

class Square extends Component {
    render() {
        return (
            <button className={this.props.alive ? 'alive' : 'dead'} onClick={() =>{ this.props.onClick(); }}>
            </button>
        );
    }
}

export default Square;
