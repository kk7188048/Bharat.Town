import React from "react";
import { Socket } from "socket.io";

import io from 'socket.io-client';
const socket = io();
const ChatBox: React.FC = () => {
    const [messages, setMessages] = React.useState<string[]>([]);
    const [newMessage, setNewMessage] = React.useState('');
  
    const sendMessage = () => {
      socket.emit('message', newMessage);
      setNewMessage('');
    };
  
    React.useEffect(() => {
      socket.on('message', (msg: string) => setMessages((prev) => [...prev, msg]));
    }, []);
  
    return (
      <div>
        <div>
          {messages.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>
        <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    );
  };
  
  export default ChatBox;
  