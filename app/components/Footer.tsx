import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-10">
      <div className="container mx-auto text-center text-white">
        <p>
          Open Source project inspired by Gather.town |{' '}
          <a
            href="https://github.com/your-username/your-repo-name"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </p>
        <p>&copy; 2024 Bharat.Town. MIT License.</p>
      </div>
    </footer>
  );
};

export default Footer;
