import React, { Component } from 'react';
import Board from '../components/Board.jsx';
import GameInfo from '../components/GameInfo.jsx';
import { getOtherPlayer } from '../state/gameLogic.js';
import initialState from '../state/initialState';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleCellClick = event => {
    const index = event.target.dataset.index;
    const grid = this.state.grid.slice();
    grid[index] = this.state.player;
    const player = getOtherPlayer(this.state.player);
    this.setState({ grid, player });
  };
  restartGame = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <>
        <Board grid={this.state.grid} handleCellClick={this.handleCellClick} />
        <GameInfo player={this.state.player} grid={this.state.grid} />
        <button onClick={this.restartGame}>Restart Game</button>
      </>
    );
  }
}

export default TicTacToeContainer;
