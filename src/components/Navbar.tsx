import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-green-600">Raythori</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/buyer" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Buy
            </Link>
            <Link to="/seller" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
              Sell
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/buyer"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/seller"
              className="block text-gray-700 hover:text-green-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Sell
            </Link>
            <button className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}