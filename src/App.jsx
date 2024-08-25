import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </Router>
  )
}

export default App
