import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '', email: '', mobile: '', address: '', city: '', pincode: '', role: 'Customer', password: ''
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {...form, id: Date.now()};
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    alert('Registration Successful! Please Login 🌱');
    navigate('/login');
  };

  return (
    <div style={{
      background: `linear-gradient(rgba(46, 125, 50, 0.7), rgba(27, 94, 32, 0.8)), url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070') center/cover`,
      minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontFamily: "'Poppins', sans-serif", padding: '40px 20px'
    }}>
      
      {/* REGISTER CARD */}
      <div style={{
        background: 'white', padding: '35px 40px', borderRadius: '20px', 
        width: '100%', maxWidth: '500px',
        boxShadow: '0 15px 50px rgba(0,0,0,0.2)'
      }}>
        
        <h1 style={{color: '#1B5E20', fontSize: '28px', marginBottom: '10px', textAlign: 'center'}}>
          🌱 Punarvana Register
        </h1>
        <p style={{color: '#666', marginBottom: '25px', fontSize: '14px', textAlign: 'center'}}>Join us to rescue plants</p>

        <form onSubmit={handleRegister}>
          
          <label style={labelStyle}>Full Name</label>
          <input style={inputStyle} type="text" placeholder="Enter your full name"
            value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required/>

          <label style={labelStyle}>Email</label>
          <input style={inputStyle} type="email" placeholder="Enter your email"
            value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required/>

          <label style={labelStyle}>Mobile Number</label>
          <input style={inputStyle} type="tel" placeholder="Enter 10 digit number"
            value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})} required/>

          <label style={labelStyle}>Address</label>
          <textarea style={{...inputStyle, height: '70px'}} placeholder="Enter your address"
            value={form.address} onChange={(e) => setForm({...form, address: e.target.value})}/>

          <div style={{display: 'flex', gap: '15px'}}>
            <div style={{flex: 2}}>
              <label style={labelStyle}>City</label>
              <input style={inputStyle} type="text" placeholder="City"
                value={form.city} onChange={(e) => setForm({...form, city: e.target.value})}/>
            </div>
            <div style={{flex: 1}}>
              <label style={labelStyle}>Pincode</label>
              <input style={inputStyle} type="text" placeholder="Pincode"
                value={form.pincode} onChange={(e) => setForm({...form, pincode: e.target.value})}/>
            </div>
          </div>

          <label style={labelStyle}>I am a</label>
          <select style={inputStyle} value={form.role} onChange={(e) => setForm({...form, role: e.target.value})}>
            <option value="Customer">🙋 Customer - I want to rescue plants</option>
            <option value="Donor">🤝 Donor - I want to donate/sell plants</option>
          </select>

          <label style={labelStyle}>Password</label>
          <input style={inputStyle} type="password" placeholder="Create a password"
            value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required/>

          <button type="submit" style={btnStyle}>
            Create Account
          </button>
        </form>

        <p style={{marginTop: '20px', color: '#555', fontSize: '14px', textAlign: 'center'}}>
          Already have an account? 
          <Link to="/login" style={{color: '#2E7D32', fontWeight: 'bold', textDecoration: 'none', marginLeft: '5px'}}>
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

const labelStyle = {display: 'block', marginBottom: '6px', color: '#2E7D32', fontWeight: '600', fontSize: '13px'};
const inputStyle = {
  width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', 
  border: '2px solid #C8E6C9', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
};
const btnStyle = {
  width: '100%', padding: '15px', background: 'linear-gradient(90deg, #2E7D32, #43A047)', 
  color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', 
  fontSize: '16px', cursor: 'pointer', marginTop: '10px'
};

export default Register;