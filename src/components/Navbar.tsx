import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-black text-red-600 tracking-tight">
              NETFLIX
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tv-shows" 
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive('/tv-shows') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              TV Shows
            </Link>
            <Link 
              to="/movies" 
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive('/movies') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Movies
            </Link>
            <Link 
              to="/new-popular" 
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive('/new-popular') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              New & Popular
            </Link>
            <Link 
              to="/my-list" 
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive('/my-list') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              My List
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top duration-200">
            <Link 
              to="/" 
              className={`block py-2 transition-colors duration-200 ${
                isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/tv-shows" 
              className={`block py-2 transition-colors duration-200 ${
                isActive('/tv-shows') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link 
              to="/movies" 
              className={`block py-2 transition-colors duration-200 ${
                isActive('/movies') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link 
              to="/new-popular" 
              className={`block py-2 transition-colors duration-200 ${
                isActive('/new-popular') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              New & Popular
            </Link>
            <Link 
              to="/my-list" 
              className={`block py-2 transition-colors duration-200 ${
                isActive('/my-list') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              My List
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
