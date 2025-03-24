import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/home" className="flex items-center group">
          <img 
            src="/assets/logo.png" 
            alt="AgriCompare Logo" 
            className="h-10 w-10 mr-2 transition-transform group-hover:scale-110"
          />
          <h1 className="text-2xl font-bold text-green-700 group-hover:text-green-600 transition-colors">
            AgriCompare
          </h1>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Home
          </Link>
          <div id="google_translate_element" className="inline-block"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;