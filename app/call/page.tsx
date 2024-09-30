// pages/room/[roomCode].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Room: React.FC = () => {
  const router = useRouter();
  const { roomcode } = router.query;
  const [isRoomValid, setIsRoomValid] = useState(false);

  useEffect(() => {
    if (roomcode) {
      // Optionally, verify if the room exists via API call
      // For now, we'll assume any roomCode is valid.
      setIsRoomValid(true);
    }
  }, [roomcode]);

  if (!isRoomValid) {
    return <p>Loading room...</p>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Room: {roomcode}</h1>
      {/* This is where the virtual space will be loaded */}
      <div className="flex items-center space-x-4">
        <p>Welcome to your virtual space!</p>
        {/* Add map, avatars, or other room-specific content here */}
      </div>
    </div>
  );
};

export default Room;
