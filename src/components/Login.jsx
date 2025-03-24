import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!formData.username.trim()) {
      setError('Username is required');
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.contact)) {
      setError('Valid 10-digit contact number required');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('agriCompareUser', JSON.stringify({
        username: formData.username,
        contact: formData.contact,
        timestamp: new Date().toISOString()
      }));
      setIsAuthenticated(true);
      navigate('/home');
    }, 1000);
  };

  const handleSkip = () => {
    localStorage.setItem('agriCompareUser', JSON.stringify({
      username: 'Guest',
      contact: '0000000000',
      isGuest: true
    }));
    setIsAuthenticated(true);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4 relative">
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 text-green-700 hover:text-green-900 bg-white/50 px-4 py-2 rounded-full text-sm font-medium transition-all"
      >
        Skip →
      </button>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-2">Welcome Back</h2>
          <p className="text-green-600">Please enter your details</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Contact Number</label>
            <input
              type="tel"
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="10-digit number"
              maxLength="10"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
              isSubmitting ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Submit'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;