import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.js'; 
import Home from './pages/home/home.js'; 
function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;