import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Card from './components/card'

const test = (num) => {
  return ['test', 'test']
}

function App() {
  const [count, setCount] = useState('test')

  console.log(test(10));
  console.log(test(15));

  let a = 'test'
  return (
    <>

      {a}
      <Button buttonText='Cancel' bgColor='red' onClick={() => {
        console.log(a);
        a = 'text changed'
        setCount('text changed')
        console.log(a);

      }} />
      {count}
    </>
  )
}

export default App
