const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 mt-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-black mb-4 text-red-600">NETFLIX</h3>
            <p className="text-sm text-gray-500">
              Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#tv-show" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#movie" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Movies
                </a>
              </li>
              <li>
                <a href="#novel" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  My List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Horror
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2 text-gray-500">Email: support@netflix.com</p>
            <div className="flex flex-col space-y-2 mt-4">
              <a 
                href="#" 
                className="text-sm hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm hover:text-white transition-colors duration-200 cursor-pointer"
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
