import './App.css';
import{useState}from  'react';

function Restart(onRestart){
  return <button className='restart' onClick={onRestart}>Restart</button>
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
    status= `Game over Winner is:${Winner}`;
  }else{
    // if xIsNext set status to x else to O
    status =  "Next player: "+(xIsNext?"X":"O")
  }
  function Restart(){
    for(let i = 0; i<squares.length; i++){
      squares[i] = "";
    }
  }
  function handleClick(i){
    if(squares[i]|| CalcWinner[squares]){
      return;
    }
    const nextSquares = squares.slice();
    const Player1 = squares[i]="X";
    const Player2= squares[i]="O";
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
      <Square value = {squares[0]} onSquareClick={ ()=> handleClick(0)}  onRestart = {() => Restart()}/>
      <Square value = {squares[1]} onSquareClick={ ()=> handleClick(1)}  onRestart = {() => Restart()}/>
      <Square value ={squares[2]} onSquareClick={ ()=> handleClick(2)}   onRestart= {() => Restart()}/>
    </div>
    <div className =  "Row">
      <Square value = {squares[3]} onSquareClick={ ()=> handleClick(3)}  onRestart = {() => Restart()}/>
      <Square value = {squares[4]} onSquareClick={ ()=> handleClick(4)}  onRestart = {() => Restart()}/>
      <Square value = {squares[5]} onSquareClick={ ()=> handleClick(5)}  onRestart = {() => Restart()}/>
    </div>
    <div className =  "Row">
      <Square value = {squares[6]} onSquareClick={ ()=> handleClick(6)}  onRestart = {() => Restart()}/>
      <Square value = {squares[7]} onSquareClick={ ()=> handleClick(7)}  onRestart = {() => Restart()}/>
      <Square value = {squares[8]} onSquareClick={ ()=> handleClick(8)}  onRestart = {() => Restart()}/>
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
        if(squares[a] && squares[a]=== squares[b] && squares[a] === squares[c]){
          GameOver = true;

          return squares[a],GameOver;
        }else{
          return GameOver = false;
        }
      }
      /*if(GameOver){

      }*/
      return null;
    }
}

