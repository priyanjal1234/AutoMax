import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Demo from './pages/Demo'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<LandingPage />}/>
      <Route path='/demo' element = {<Demo />}/>
    </Routes>
  )
}

export default App