import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route element={<Chat />} path="/chat"/>
      </Routes>
    </Router>
  )
}

export default App
