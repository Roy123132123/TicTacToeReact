import './App.css';
import{useState}from  'react';


//makes a new function react component
function Square({value,onSquareClick}){
  return <button className = "Square" onClick={onSquareClick}>{value}</button>
}
//default keyword makes this function the main function to execute
export default function Board() {
  const[squares,setSquares] =  useState(Array(9).fill(null));
  const[xIsNext,setXNext] = useState(true);

  function calcWinner(squares){
    let GameOver = null;
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],
      [0, 3, 6],[1, 4, 7],[2, 5, 8],
      [0, 4, 8],[2, 4, 6]
    ];
    for(let i = 0; i<lines.length; i++){
      const[a, b, c]= lines[i];
      if(squares[a] && squares[a]=== squares[b] && squares[a] === squares[c]){
        GameOver = true;
        
        return squares[a],GameOver;
      }else{
        return GameOver = false;
      }
    }
    if(GameOver){
      for(let i = 0; i<squares.length; i++){
        squares[i] = null;
      }
    }
    return null; //if no winner return null
  }
  function handleClick(i){
    if(squares[i]|| calcWinner[squares]){
      return;
    }
    const nextSquares = squares.slice();
    constSquares[i] = xIsNext? 'X':'O';
    setXNext(!xIsNext);
    setSquares(nextSquares);
  }
  function restart(){
    setSquares(Array(9).fill(null)); // Reset squares to an array with null values
    setXNext(true);
  }
  const Winner = calcWinner(squares);
  let status;
  if(Winner){
    status= `Game over Winner is:${squares[a]}`;
  }else{
    // if xIsNext set status to x else to O
    status =  `Next player: ${xIsNext?'X':'O'}`;
  }
  return (
  <>
    <div className= "status">{status}</div>
    <header>
      <button className='restart' onClick={restart}>Restart</button>
    </header>
  <div className = "Container">
    <div className =  "Row">
      {[0,1,2].map((i) =>(
        <Square key = {i} 
        value = {squares[i]} 
        onSquareClick = {() => handleClick(i)}/>
      )
      )}
    {/*Replace all rows with code above*/}
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
    
}

