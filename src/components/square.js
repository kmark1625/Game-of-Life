import React, { Component } from 'react';
import '../styles/square.css'

class Square extends Component {
    constructor() {
        super();
        this.state = {
            alive: false
        };
    }

    render() {
        return (
            <button className={this.state.alive ? 'alive' : 'dead'} onClick={() =>{ this.setState({alive: true}); }}>
            </button>
        );
    }
}

export default Square;
