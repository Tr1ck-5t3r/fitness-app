import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Workouts from './pages/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for dark theme

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Authentication setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/workouts" element={<Workouts />} />
              {/* <Route path="/nutrition" element={<Nutrition />} /> */}
              {/* <Route path="/goals" element={<Goals />} /> */}
            </>
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
