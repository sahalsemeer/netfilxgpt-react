import React from 'react'
import LoginPage from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage />
    },
  ])
  return <RouterProvider router={router} />
  
}

export default App