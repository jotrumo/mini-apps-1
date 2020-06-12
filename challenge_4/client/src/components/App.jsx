import React from 'react';
import Player from './Player.jsx';
import Piece from './Piece.jsx';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      table: [];
    }
  }

  render() {
    return(
      <div>
        <h1 align='center'>Connect 4</h1>
        <Player />
        <Player />
        <div align='center'>
          <Board />
        </div>
        <button>New Game</button>
      </div>
    );
  }
};

export default App;