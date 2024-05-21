import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home.jsx'
import Procedimentos from './routes/Procedimentos.jsx'
import Preparatorios from './routes/Preparatorios.jsx'
import Planos from './routes/Planos.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'


const router = createBrowserRouter([
{
  path:'/', element:<App />,
  errorElement: <Error />,

  children: [
    {path: '/', element: <Home />},
    {path: '/Procedimentos', element: <Procedimentos />},
    {path: '/Preparatorios', element: <Preparatorios />},
    {path: '/Planos', element: <Planos />},
    {path: '/Contato', element: <Contato />},
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)