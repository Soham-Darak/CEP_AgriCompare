import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Result from './components/Result';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('agriCompareUser');
    setIsAuthenticated(!!user);
  }, []);

  const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />
        } />
        
        <Route path="/home" element={
          isAuthenticated ? <Layout><Home /></Layout> : <Navigate to="/" replace />
        } />
        
        <Route path="/result" element={
          isAuthenticated ? <Layout><Result /></Layout> : <Navigate to="/" replace />
        } />
        
        <Route path="*" element={
          <Navigate to={isAuthenticated ? "/home" : "/"} replace />
        } />
      </Routes>
    </Router>
  );
};

export default App;