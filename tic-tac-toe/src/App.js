import logo from './logo.svg';
import './App.css';

export default function Board() {
  return (
  <>
  <div className = "Container">
    <div className = "row">
      <button className = "Square">1</button> 
      <button className = "Square">2</button> 
      <button className = "Square">3</button> 
    </div>
    <div className = "row">
      <button className = "Square">4</button> 
      <button className = "Square">5</button> 
      <button className = "Square">6</button> 
    </div>
   <div className =  "row">
     <button className = "Square">7</button>
      <button className = "Square">8</button> 
     <button className = "Square">9</button> 
    </div>
  </div>
  </> );
}

