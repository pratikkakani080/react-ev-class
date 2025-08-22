import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button'

// mounting
// updating
// unmounting

// default hooks
// useState
// useEffect
// useContext

function App() {
  const [count, setCount] = useState(0)
  console.log('outside logger statement');

  useEffect(() => {
    console.log('this component mounted __ inside logger statement');
    return () => {
      console.log('this component getting unmounted');
    }
  }, [count])

  return (
    <>
      <Button buttonText='Cancel' bgColor='red' onClick={() => setCount(count + 1)} />
      {count}
    </>
  )
}

export default App
