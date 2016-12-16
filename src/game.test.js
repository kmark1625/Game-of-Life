import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

it('renders Game without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
});

it('setupSquares returns an nxn array', () => {
  var game = new Game();
  var squares = game.setupSquares(20);
  expect(squares.length).toEqual(20);
  expect(squares[0].length).toEqual(20);
})

it('sets specified squares as alive after initialization', () => {
  var game = new Game();
  var squares = game.setupSquares(20);
  expect(squares[0][0]).toEqual(true);
  expect(squares[1][0]).toEqual(true);
  expect(squares[0][1]).toEqual(true);
  expect(squares[3][1]).toEqual(true);
  expect(squares[1][2]).toEqual(true);
  expect(squares[2][2]).toEqual(true);
});

it('allows a given square to be set', () => {
  var game = new Game();
  var squares = game.setupSquares(20);
  game.setSquare(squares, 5,5);
  expect(squares[5][5]).toEqual(true);
});

it('checks if a given square is alive and returns false if out of bounds', () => {
  var game = new Game();
  var squares = game.setupSquares(20);
  expect(game.isAlive(squares, -5,-5)).toEqual(false);
  expect(game.isAlive(squares, 0, 0)).toEqual(true);
});