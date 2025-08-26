import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button'
import Form from './modules/form';

// mounting
// updating
// unmounting

// default hooks
// useState
// useEffect
// useContext

const data = [1, 3, 5, 7, 8 ,5, 3, 4, 6, 4]

function App() {
  const [count, setCount] = useState(0)
  const [filteredData, setFilteredData] = useState(data)
  let aa = 0
  console.log('outside logger statement');

  useEffect(() => {
    console.log('this component mounted __ inside logger statement');

    // clean up function
    return () => {
      console.log('this component getting unmounted');
    }
  }, [count])

  return (
    <>
      {/* <Form /> */}
      {aa}
      <Button buttonText='Cancel' bgColor='red' onClick={() => {
        setCount(count + 1); aa = aa + 1; console.log(aa);
      }} />
      {count}
      <input type='search' onChange={(e) => {
        let searchStr = e.target.value
        setFilteredData(searchStr.length === 0 ? data : data.filter(el => String(el) === searchStr))
      }} />

      {
        filteredData.map(el => {
          return <p>{el}</p>
        })
      }
    </>
  )
}

export default App
