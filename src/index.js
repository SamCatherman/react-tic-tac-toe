import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//renders each individual square on game board
class Square extends React.Component {

  //constructor function to initialize state of a square
  constructor(){
    //needed to define constructor of a subclass
    super();
    this.state = {
      value: null,
    };
  }

  render(){
    return(
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

//renders nine squares of game board
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next Player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//renders full game board, including turn status
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/*todo*/}</ol>
        </div>
       </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
