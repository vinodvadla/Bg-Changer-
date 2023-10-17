import './App.css'
import { useState } from 'react'
const App = () => {
  const [color, setcolor] = useState("#000");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex-wrap flex justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2'>
          <button className='px-4 py-2 bg-yellow-400 text-black text-xl outline-none rounded-full shadow-xl' onClick={()=>setcolor("yellow")}>Yellow</button>
          <button className='px-4 py-2 bg-red-500 text-black text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("red")}>Red</button>
          <button className='px-4 py-2 bg-green-600 text-black text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("green")}>Green</button>
          <button className='px-4 py-2 bg-blue-600 text-black text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("blue")}>Blue</button>
          <button className='px-4 py-2 bg-white text-black text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("white")}>White</button>
          <button className='px-4 py-2 bg-black text-white text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("black")}>Black</button>
          <button className='px-4 py-2 bg-orange-500 text-black text-xl outline-none rounded-full shadow-lg' onClick={()=>setcolor("orange")}>Orange</button>
        </div>
      </div>
    </div>

  )
}

export default App;
