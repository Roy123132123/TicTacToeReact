import logo from './logo.svg';
import './App.css';
import{useState}from  'react';

function Restart(){
  return <button className='Restart'/* onClick={RestartGame}*/>Restart</button>
}
function Square({value,onSquareClick}){
  return <button className = "Square" onClick={onSquareClick}>{value}</button>
}
export default function Board() {
  const[squares,setSquares] =  useState(Array(9).fill(null));
  const[xIsNext,setXNext] = useState(true);
  const Winner = CalcWinner(squares);
  let status;
  if(Winner){
    status= "Winner: "+Winner;
  }else{
    // if xIsNext set status to x else to O
    status =  "Next player: "+(xIsNext?"X":"O")
  }
  function handleClick(i){
    if(squares[i]|| CalcWinner[squares]){
      return;
    }
    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i]= "X";
    }else{
      nextSquares[i]=  "O";
    }
    setXNext(!xIsNext);
    setSquares(nextSquares);
  }
  return (
  <>
    <div className= "status">{status}
    <header>
      <Restart />
    </header>
    </div>
  <div className = "Container">
    <div className =  "Row">
      <Square value = {squares[0]} onSquareClick={ ()=> handleClick(0)}/>
      <Square value = {squares[1]} onSquareClick={ ()=> handleClick(1)}/>
      <Square value ={squares[2]} onSquareClick={ ()=> handleClick(2)}/>
    </div>
    <div className =  "Row">
      <Square value = {squares[3]} onSquareClick={ ()=> handleClick(3)}/>
      <Square value = {squares[4]} onSquareClick={ ()=> handleClick(4)}/>
      <Square value = {squares[5]} onSquareClick={ ()=> handleClick(5)}/>
    </div>
    <div className =  "Row">
      <Square value = {squares[6]} onSquareClick={ ()=> handleClick(6)}/>
      <Square value = {squares[7]} onSquareClick={ ()=> handleClick(7)}/>
      <Square value = {squares[8]} onSquareClick={ ()=> handleClick(8)}/>
    </div>
  </div>
  </> );
    function CalcWinner(squares){
      let GameOver = null;
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
      for(let i = 0; i<lines.length; i++){
        const[a,b,c]= lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          GameOver = true;

          return squares[a],GameOver;
        }else{
          return GameOver = false;
        }
      }
      return null;
    }
}

