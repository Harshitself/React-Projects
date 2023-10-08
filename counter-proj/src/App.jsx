import { useState } from 'react'
import './App.css'

function App() {

 const [counter, setCount] = useState(0);


 const addValue = () => { 
  console.log("Add value called",counter);
   //counter = counter + 1;
  setCount(counter + 1);
 
 }

  return (
    <>

      <h1>Counter App</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Increment</button>

<br />

<button onClick={() => setCount(counter - 1)}>Decrement</button>

    </>
  )
}

export default App
