import {} from 'react'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App