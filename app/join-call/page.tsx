'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // In Next.js 13+, use `next/navigation` instead of `next/router`
import { Button } from '../components/button'; // Assuming you have a Button component

const generateRandomName = () => {
  const adjectives = ['Brave', 'Curious', 'Bright', 'Eager', 'Friendly', 'Gentle'];
  const animals = ['Panda', 'Tiger', 'Eagle', 'Koala', 'Dolphin', 'Lion'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  return `${randomAdjective}${randomAnimal}`;
};

export default function JoinCallPage() {
  const [userName, setUserName] = useState(generateRandomName());
  const router = useRouter();

  const handleJoinCall = () => {
    // Redirect to the call page (replace `/call` with actual video call logic later)
    router.push(`/call?user=${userName}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Join Video Call</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Your Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-xs"
          placeholder="Enter your name"
        />
      </div>

      <Button onClick={handleJoinCall} className="bg-blue-600 text-white px-6 py-2 rounded-md">
        Join Call
      </Button>
    </div>
  );
}
