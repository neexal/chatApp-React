import Chat from './Chat';
import User from './User'
import React from 'react';
class ChatApp extends React.Component {
    render() {
        return (
            <div className='rowC'>
                <div className="leftColumn">
                    <User />
                </div>
                <div className="rightColumn">
                   <Chat /> 
                </div>

            </div>
        );
    }
}

export default ChatApp
