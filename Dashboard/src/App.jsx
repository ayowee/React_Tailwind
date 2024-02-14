import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h1>Counter: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
