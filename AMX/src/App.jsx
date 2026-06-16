import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App() {
    const [count , setcount] = useState(0);
    const increment = () =>{
      setcount(count + 1);
    };
    const decrement = () =>{
      if(count <= 0 ){
        alert("counter can not be negative");
        return;
      }
      setcount(count -1);
    };
    return (
      <div>
         <h1> Counter Application</h1>
         <h2>{count}</h2>
         <button  onClick= {increment}>Increment</button>
         <button onClick = {decrement}> Decrement</button>
         </div>

    );
}
export default App;
  