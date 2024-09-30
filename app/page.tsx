import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Bharat.Town - Virtual Town',
  description: 'An open-source alternative to Gather.Town',
};


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Bharat.Town
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            An open-source virtual town where you can explore, interact, and communicate with others in real-time.
          </p>

          <div className="space-x-4">
            <Link href="/map"className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
                Join the Virtual Space
              
            </Link>
            <Link href="/chat"className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700">
                Start Chatting
              
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
