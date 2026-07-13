import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert(`Welcome back ${user.name}! 🌱`);
      navigate('/');
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <div style={{
      background: `linear-gradient(rgba(46, 125, 50, 0.7), rgba(27, 94, 32, 0.8)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071') center/cover`,
      minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Poppins', sans-serif"
    }}>
      
      {/* LOGIN CARD */}
      <div style={{
        background: 'white', padding: '40px 35px', borderRadius: '20px', 
        width: '100%', maxWidth: '400px',
        boxShadow: '0 15px 50px rgba(0,0,0,0.2)', textAlign: 'center'
      }}>
        
        <h1 style={{color: '#1B5E20', fontSize: '28px', marginBottom: '10px'}}>
          🌱 Punarvana Login
        </h1>
        <p style={{color: '#666', marginBottom: '30px', fontSize: '14px'}}>Welcome back! Rescue a plant today</p>

        <form onSubmit={handleLogin} style={{textAlign: 'left'}}>
          
          <label style={labelStyle}>Email</label>
          <input 
            style={inputStyle} 
            type="email" 
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />

          <label style={labelStyle}>Password</label>
          <input 
            style={inputStyle} 
            type="password" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />

          <button type="submit" style={btnStyle}>
            Login
          </button>
        </form>

        <p style={{marginTop: '25px', color: '#555', fontSize: '14px'}}>
          Don't have an account? 
          <Link to="/register" style={{color: '#2E7D32', fontWeight: 'bold', textDecoration: 'none', marginLeft: '5px'}}>
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

const labelStyle = {display: 'block', marginBottom: '8px', color: '#2E7D32', fontWeight: '600', fontSize: '14px'};
const inputStyle = {
  width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '10px', 
  border: '2px solid #C8E6C9', fontSize: '15px', outline: 'none', boxSizing: 'border-box',
  transition: 'border 0.3s'
};
const btnStyle = {
  width: '100%', padding: '15px', background: 'linear-gradient(90deg, #2E7D32, #43A047)', 
  color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', 
  fontSize: '16px', cursor: 'pointer', marginTop: '10px'
};

export default Login;