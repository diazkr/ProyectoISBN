
import './App.css'
import { useState } from 'react'
import MisTurnos from './components/MisTurnos/MisTurnos'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './view/Home/Home'
import Doctores from './view/Doctores/Doctores'
import ServiciosMedicos from './view/ServiciosMedicos/ServiciosMedicos'
import FondoLogin from './components/reusable/FondoLogin/FondoLogin'
import FondoRegister from './components/reusable/FondoRegister/FondoRegister'
import FondoCreateCita from './components/reusable/FondoCreateCita/FondoCreateCita'
import ErrorPage from './view/ErrorPage/ErrorPage'
import Footer from './components/reusable/Footer/Footer'

function App() {


  return(

    <>
      


      <Navbar/>

      <Routes>
        <Route path='/' element={<FondoLogin/>}/> 
        <Route path='/login' element={<FondoLogin/>}/> 
        <Route path='/register' element={<FondoRegister/>}/>
        <Route path='/citas' element={<MisTurnos/> }/> 
        <Route path='/home' element={<Home/> }/> 
        <Route path='/doctores' element={<Doctores/> }/> 
        <Route path='/services' element={<ServiciosMedicos/> }/> 
        <Route path='/crearCita' element={<FondoCreateCita/> }/> 
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer/>

    </>

  )

}

export default App
