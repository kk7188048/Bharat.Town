import Link from 'next/link';

const Header = () => {
    return (
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold">India.town</h1>
        <nav>
        <Link href="/join-call" className="text-white px-4">
          Join Video Call
        </Link>
      </nav>
      </header>
    );
  };
  
export default Header;
  