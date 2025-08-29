import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Form from './modules/form'
import Home from './modules/home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Home />
    },
    {
      path: '/form', element: <Form />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
