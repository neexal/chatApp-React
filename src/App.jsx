import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './Chat'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route element={<Chat />} path="/chat"/>
        <Route element={<Login />} path=""/>
      </Routes>
    </Router>
  )
}

export default App
