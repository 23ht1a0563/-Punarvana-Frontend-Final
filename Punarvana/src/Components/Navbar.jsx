import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: 'white', padding: '15px 50px', 
      boxShadow: '0 4px 20px rgba(46,125,50,0.1)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      position: 'sticky', top: 0, zIndex: 1000,
      fontFamily: "'Poppins', sans-serif"
    }}>
      
      {/* LOGO SECTION */}
      <Link to="/" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
        <span style={{fontSize: '32px'}}>🌱</span> 
        <h2 style={{color: '#1B5E20', margin: '0', fontWeight: '700'}}>Punarvana</h2>
      </Link>

      {/* MENU LINKS */}
      <div style={{display: 'flex', gap: '25px', alignItems: 'center'}}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/plants" style={linkStyle}>Discover</Link>
        <Link to="/add-plant" style={linkStyle}>Add Plant</Link>
        <Link to="/login">
          <button style={btnStyle}>Login</button>
        </Link>
      </div>
    </nav>
  );
};

const linkStyle = {color: '#2E7D32', textDecoration: 'none', fontWeight: '600', fontSize: '15px'};
const btnStyle = {padding: '10px 25px', background: 'linear-gradient(90deg, #2E7D32, #43A047)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer'};

export default Navbar;