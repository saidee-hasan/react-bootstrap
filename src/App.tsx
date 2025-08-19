
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppSelector } from './redux/hooks'


function App() {
const dispatch = useDispatch()
const {count} =useAppSelector((state)=> state.counter)
const handleIncrement = ()=>{
  dispatch(increment())
}
const handleDecrement = ()=>{
  dispatch(decrement())
}


  return (
    <>
      <button onClick={handleIncrement}>Increment</button>

<div>{count}</div>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
