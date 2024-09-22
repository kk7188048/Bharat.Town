import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Gather.town</h1>
      <p className="text-lg mb-8">
        Gather.town is a virtual space where you can connect, collaborate, and have fun with others.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;