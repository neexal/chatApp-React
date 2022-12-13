import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState()
    const [allData, setAllData] = React.useState([])

    

    const getLoginData = async () => {
        // username : 'admin',
        // password : 'password'
        await axios.get('http://127.0.0.1:8000/register/').then(res => {
            setAllData(res.data)
            console.log(res.data)
            })
    }
    React.useEffect(() => {
        getLoginData()
    }, [])

    const checkAuth = (e) => {
        e.preventDefault();
        // const matchingAcc = allData.find((res) => res.username === authData.username && res.password === authData.password);
        // if (authData.text === allData[0].username && authData.password === allData[0].password) {
            for(let i=0;i< allData.length;i++){
                // const res = allData[i]
                if (allData[i].username===authData.username && allData[i].password===authData.password) {
                    console.log("Login Successful")
                    setUser(authData.text)
                    localStorage.setItem('loginUser', authData.username)
                    localStorage.setItem('sender',allData[i].username)
                    console.log(localStorage.user)
                    navigate("/chat");
                }
            }
            // console.log(res.username)
            // console.log(matchingAcc)
        
    }

    const [authData, setAuthData] = React.useState({});
    console.log(authData)

    return (
        <div className="App">
            <form className='loginForm'>
                <h1>Login Form</h1>
                <label htmlFor="">Username:</label>
                <input type="text" name="" id="" placeholder="Enter Username:"
                    onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
                />
                <label htmlFor="">Password:</label>
                <input type="password" name="" id="" placeholder="Enter Password:"
                    onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                />
                <button className='btnLogin' onClick={(e) => checkAuth(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login