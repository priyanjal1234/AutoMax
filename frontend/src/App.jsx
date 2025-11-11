import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Demo from './pages/Demo'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<LandingPage />}/>
      <Route path='/demo' element = {<Demo />}/>
      <Route path='/register' element = {<Register />}/>
      <Route path='/login' element = {<Login />}/>
    </Routes>
  )
}

export default App