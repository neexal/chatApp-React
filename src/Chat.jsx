import axios from 'axios';
import React from 'react'
// import { AiOutlineMenu } from 'react-icons'

const Chat = () => {
  // const [msg, setMsg] = React.useState('');
  const [message, setMessage] = React.useState([]);
  // const addMessages = (msg) => {
  //   setMessage([...message, msg])

  // }
  // console.log(message)

  const getMessage = async () => {
    // username : 'admin',
    // password : 'password'
    await axios.get('http://127.0.0.1:8000/get-message/').then(res => {
      setMessage(res.data)
      // console.log(res.data)
    })
  }
  React.useEffect(() => {
    getMessage()
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const msgInput = e.target.elements.message;
    const msg = msgInput.value;
    let recipient = 1
    if (localStorage.loginUser == 1) {
      recipient = 2
    }
    else{
      recipient = 1
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/add-message/',
        {
          content: msg,
          sender: localStorage.loginUser,
          recipient,
        });
      console.log(response)
      setMessage([...message], response.data)
    } catch (error) {
      console.log(error)
    }
    msgInput.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat-container">
        <div className="chat-header">
          <h3>Chat</h3>
        </div>
        <div className="chat-messages">
          {
            message.map((res) => {
              const sender = res.sender;
              if (localStorage.loginUser == sender) {
                return (
                  <div className="message-container sent" key={Math.random()}>
                    <p>{res.content}</p>
                  </div>
                )
              }
              
              else {
                return (
                  <div className="message-container received" key={Math.random()}>
                    <p>{res.content}</p>
                  </div>
                )
              }

            })
          }
          {/* <div className="message-container received">
              <p>Hi there!</p>
            </div> */}
        </div>
        <div className="chat-input">
          <input type="text" name="message" placeholder="Enter your message here" />
          <button>Send</button>
        </div>
      </div>
    </form>
  );
}


export default Chat