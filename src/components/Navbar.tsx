import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-black text-red-600 tracking-tight">
              NETFLIX
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#tv-show" 
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              TV Shows
            </a>
            <a 
              href="#movie" 
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              Movies
            </a>
            <a 
              href="#animation" 
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              New & Popular
            </a>
            <a 
              href="#novel" 
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200 cursor-pointer"
            >
              My List
            </a>
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
            <a 
              href="#" 
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#tv-show" 
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </a>
            <a 
              href="#movie" 
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </a>
            <a 
              href="#animation" 
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              New & Popular
            </a>
            <a 
              href="#novel" 
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              My List
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
