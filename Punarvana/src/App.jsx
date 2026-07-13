import React from 'react';
import { Routes, Route } from 'react-router-dom'  // 1. Router teesesam
import Navbar from './components/Navbar';

// pages folder nundi import
import Home from './pages/Home';
import Plants from './pages/Plants';
import AddPlant from './pages/AddPlant';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>  {/* 2. <Router> teesi <> pettam */}
      {/* Navbar anni pages paina untundi */}
      <Navbar />

      {/* Page change ayedi ikkada */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/add-plant" element={<AddPlant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </>
  );
}

export default App;