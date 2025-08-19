import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Increment</button>

<div>0</div>
    <button>Decrement</button>
    </>
  )
}

export default App
