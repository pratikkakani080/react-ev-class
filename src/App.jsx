import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import './App.css'
import Form from './modules/form'
import Home from './modules/home'
import Blog from './modules/blog'
import BlogDetails from './modules/blog/details'
import Header from './components/header'
import DefaultLayout from './components/defaultLayout'
import Signup from './modules/signup'
import { Toaster } from 'react-hot-toast'
import ToDo from './modules/toDo'
import Products from './modules/products'
import Login from './modules/login'
import Users from './modules/users'
import Parent from './modules/parent'
import DomManipulation from './modules/domManipulation'
import MyContextProvider from './config/components/myContextProvider'
import GlobalProvider from './config/components/globalProvider'
import Performance from './modules/performance'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/form', element: <Form /> },
        { path: '/products', element: <Products /> },
        { path: '/users', element: <Users /> }
      ]
    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '/blog', element: <Blog /> },
    { path: '/blog/details/:id/:title', element: <BlogDetails /> },
    { path: '/todo', element: <ToDo /> },
    { path: '/parent', element: <Parent /> },
    { path: '/dom-manipulation', element: <DomManipulation /> },
    { path: '/performance', element: <Performance /> }
  ])

  return (
    <>
      {/* <Header /> */}
      <GlobalProvider>
        <MyContextProvider>
          <RouterProvider router={router} />
          dasdadasdadassadad
          <Toaster />
        </MyContextProvider>
      </GlobalProvider>

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
