import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import './App.css'
import Form from './modules/form'
import Home from './modules/home'
import Blog from './modules/blog'
import BlogDetails from './modules/blog/details'
import Header from './components/header'
import DefaultLayout from './components/defaultLayout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/form', element: <Form /> },
      ]
    },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/details/:id/:title', element: <BlogDetails /> }
  ])

  return (
    <>
      {/* <Header /> */}
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
