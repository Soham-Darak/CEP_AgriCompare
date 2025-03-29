import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Agricompare Logo.png"; // Ensure the file name is correct

const Header = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,hi,mr", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/home" className="flex items-center group">
          <img 
            src={Logo} 
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
          {/* Google Translate Dropdown */}
          <div id="google_translate_element" className="inline-block border border-gray-300 rounded-md px-2 py-1"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;