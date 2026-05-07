import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import GermanLanding from './pages/GermanLanding';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/german-cars" element={<GermanLanding />} />
      </Routes>
    </Router>
  );
}
