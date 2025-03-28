import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Result from './components/Result';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root path - shows Login page first */}
        <Route path="/" element={<Login />} />
        
        {/* Home route */}
        <Route path="/home" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        
        {/* Result route */}
        <Route path="/result" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              <Result />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;