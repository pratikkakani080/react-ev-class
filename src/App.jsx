import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
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

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
