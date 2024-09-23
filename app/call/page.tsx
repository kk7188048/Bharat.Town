'use client';

import { useSearchParams } from 'next/navigation';  // Use next/navigation for search params
import { useState, useEffect } from 'react';

export default function CallPage() {
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const user = searchParams.get('user');
    setUserName(user);
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Video Call Room</h1>
      <p className="text-lg">Welcome, {userName}! The video call will be implemented soon.</p>
      {/* You can add actual video call integration here later */}
    </div>
  );
}
