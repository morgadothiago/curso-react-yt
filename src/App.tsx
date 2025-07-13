import React, { useState } from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Contagem</h1>
      <button onClick={() => setCount(count + 1)} className="App-button">
        Increment
      </button>
      <p>Contagem atual: {count}</p>

      <button onClick={() => setCount(0)} className="App-button">
        Reset
      </button>
    </div>
  )
}
