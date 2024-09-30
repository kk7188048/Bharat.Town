import io from 'socket.io-client';
import React from 'react';
const socket = io();


const VideoChat: React.FC = () => {
  const [inProximity, setInProximity] = React.useState(false);

  React.useEffect(() => {
    // Socket.IO logic to listen for proximity events
  }, []);

  return inProximity ? (
    <div>
      <video autoPlay playsInline></video>
    </div>
  ) : null;
};

export default VideoChat;
