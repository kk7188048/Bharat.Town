import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [avatarPosition, setAvatarPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on('move', (data) => {
      setAvatarPosition(data);
    });

    return () => {
      socket.off('chat message');
      socket.off('move');
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    let newPos = { ...avatarPosition };
    switch (e.key) {
      case 'ArrowUp':
        newPos.y -= 5;
        break;
      case 'ArrowDown':
        newPos.y += 5;
        break;
      case 'ArrowLeft':
        newPos.x -= 5;
        break;
      case 'ArrowRight':
        newPos.x += 5;
        break;
      default:
        return;
    }
    setAvatarPosition(newPos);
    socket.emit('move', newPos);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [avatarPosition]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-full bg-gray-200">
        <div 
          className="absolute w-10 h-10 bg-blue-500 rounded-full" 
          style={{ left: avatarPosition.x + '%', top: avatarPosition.y + '%' }}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl">Chat</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <input 
        type="text" 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            const input = e.currentTarget.value;
            if (input.trim()) {
              socket.emit('chat message', input);
              e.currentTarget.value = '';
            }
          }
        }} 
        placeholder="Type a message..." 
        className="border p-2 mt-2"
      />
    </div>
  );
};

export default Home;