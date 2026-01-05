import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 mt-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-white text-2xl font-black mb-4 text-red-600 block">
              NETFLIX
            </Link>
            <p className="text-sm text-gray-500">
              Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tv-shows" className="hover:text-white transition-colors duration-200">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-white transition-colors duration-200">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/my-list" className="hover:text-white transition-colors duration-200">
                  My List
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/new-popular" className="hover:text-white transition-colors duration-200">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-white transition-colors duration-200">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/tv-shows" className="hover:text-white transition-colors duration-200">
                  Drama
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2 text-gray-500">Email: support@netflix.com</p>
            <div className="flex flex-col space-y-2 mt-4">
              <a 
                href="#" 
                className="text-sm hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 Netflix. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Disclaimer: All videos and pictures are from the Internet, and their copyrights belong to the original creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
