import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("")

  return (

    <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
      <h1 className='text-white text-center text-4xl font-bold pt-20 pb-10 duration-200  '>Hello Everyone</h1>

      <div className=" fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="bg-red-500 outline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("red")}>Red</button>
          <button className="bg-green-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("green")}>Green</button>
          <button className="bg-blue-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("blue")}>Blue</button>
          <button className="bg-yellow-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("yellow")}>Yellow</button>
          <button className="bg-orange-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("orange")}>Orange</button>
          <button className="bg-purple-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("purple")}>Purple</button>
          <button className="bg-pink-500 utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("pink")}>Pink</button>
          <button className="bg-olive-500  utline-none px-4 rounded-full shadow-lg" onClick={() => setcolor("olive")}>Olive</button>

        </div>
      </div>
    </div>

  )
}

export default App
