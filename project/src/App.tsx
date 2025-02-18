import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ExperiencedUser from './pages/ExperiencedUser';
import NewUser from './pages/NewUser';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#333333] text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experienced" element={<ExperiencedUser />} />
            <Route path="/new" element={<NewUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;