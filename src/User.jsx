import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const [user, setUser] = React.useState([])

  const getUser = async (e) => {
    axios.get('http://127.0.0.1:8000/register/').then(res => {
      setUser(res.data)
    })
  }
  console.log(user)
  React.useEffect(() => {
    getUser()
  }, [])


  const goToReceiver = (username, reciever_id) => {
    // e.preventDefault()
    // navigate("/chat", {state:{username,reciever_id}});
    console.log(username)
    localStorage.setItem('reciever', reciever_id)
  }

  return (
    <>
      <h1>Friends</h1>
      <ul>
      {
            user.map((res) => {
              const username = res.username;
              const reciever_id = res.id
              return (
                  <button className='listItem' onClick={(e)=>goToReceiver(username,reciever_id)} key={res.id}>{res.username}</button>
                  // <button onClick={goToReceiver}>Go To Receiver</button>
              )
            })}
      </ul>
    </>
  )
}

export default User