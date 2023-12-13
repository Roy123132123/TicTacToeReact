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
    if (GameOver) {
      setTimeout(()=>{ 
        setSquares(Array(9).fill(null));
        setXNext(true);
      },4000)
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
  const Winner = calcWinner(squares);
  let status;
  if (Winner) {
    status = `Game over Winner is:${Winner}`;
  } else {
    // if xIsNext set status to x else to O
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <>
      <header>
        <div className="status">{status}</div>
        <button className='restart' onClick={restart}>Restart</button>
      </header>
      <div className='Container'>
        <div className='Row'>
        {[0, 1, 2].map((i) => (
            <Square 
              key={i}
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

      </div /*clossing tag for container div */>
    </>
  );

}

