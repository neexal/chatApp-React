import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './Chat'
import ChatApp from './ChatApp'
import Login from './Login'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route element={<Chat />} path="/chat"/>
        <Route element={<Login />} path=""/>
        <Route element={<User />} path="/user"/>
        <Route element={<ChatApp />} path="/chatting"/>

      </Routes>
    </Router>
  )
}

export default App
