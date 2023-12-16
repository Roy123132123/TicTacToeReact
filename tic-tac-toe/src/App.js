import './App.css';
import { useState } from 'react';


//makes a new function react component
function Square({ value, onSquareClick }) {
  return <button className="Square" onClick={onSquareClick}>{value}</button>
}
//default keyword makes this function the main function to execute
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXNext] = useState(true);

function calcWinner(squares) {
    let GameOver = null;
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        GameOver = true;
        return GameOver, squares[a];
      } else {
        return GameOver = false;
      }
    }
    return null; //if no winner return null
  }

  function handleClick(i) {
    if (squares[i] || calcWinner[squares]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setXNext(!xIsNext);
    setSquares(nextSquares);
  }
  function restart() {
    setSquares(Array(9).fill(null)); // Reset squares to an array with null values
    setXNext(true);
  }
  const Div = document.getElementById("Win");
  const Winner = calcWinner(squares);
  let status;
  let winner;
  if (Winner) {
    winner = `The winner is ${Winner}`
  } else {
    // if xIsNext set status to x else to O
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <>
      <header>
        <h3>You can wait for the timer to reset the board or you can use the reset button to reset the board</h3>
        <button className='restart' onClick={restart}>Reset</button>
      </header>
      <div className='Container'>

        <div className="status">{status}</div>
        <div className='WinText' id='Win'>{winner}</div>

        <div className='Row'>
          {[0, 1, 2].map((i) => (
            <Square
              key={i}//indentifier for react
              value={squares[i]}
              onSquareClick={() => handleClick(i)}
            />))}
        </div>
        <div className='Row'>
          {[3, 4, 5].map((i) => (
            <Square
              key={i}
              value={squares[i]}
              onSquareClick={() => handleClick(i)}

            />))}
        </div>
        <div className='Row'>
          {[6, 7, 8].map((i) => (
            <Square
              key={i}
              value={squares[i]}
              onSquareClick={() => handleClick(i)}

            />))}
        </div>

      </div>
    </>
  );

}

