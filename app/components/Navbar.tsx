import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Bharat.Town</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home
            </Link>
          </li>
          <li>
            <Link href="/map"className="text-white hover:text-gray-300">Virtual Space
            </Link>
          </li>
          <li>
            <Link href="/chat"className="text-white hover:text-gray-300">Chat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
