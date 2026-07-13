import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlant = () => {
  const [form, setForm] = useState({
    name: '', description: '', status: 'Donate', price: '', location: '', image: ''
  });
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({...form, image: reader.result}); // photo ni base64 ga marchi save chesthundi
    };
    if(file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const plants = JSON.parse(localStorage.getItem('plants')) || [];
    const newPlant = {...form, id: Date.now()};
    localStorage.setItem('plants', JSON.stringify([...plants, newPlant]));
    alert('Plant Added Successfully! 🌱');
    navigate('/plants');
  };

  return (
    <div style={{background: 'linear-gradient(180deg, #E8F5E9 0%, #F1F8E9 100%)', minHeight: '100vh', padding: '50px 20px', fontFamily: "'Poppins', sans-serif"}}>
      
      <div style={{
        maxWidth: '600px', margin: '0 auto', background: 'white', 
        padding: '40px', borderRadius: '20px', 
        boxShadow: '0 10px 40px rgba(46,125,50,0.15)'
      }}>
        <h1 style={{textAlign: 'center', color: '#1B5E20', fontSize: '2.2rem', marginBottom: '30px'}}>
          🌿 Add New Plant
        </h1>

        <form onSubmit={handleSubmit}>
          
          <label style={labelStyle}>Plant Name</label>
          <input style={inputStyle} type="text" placeholder="Ex: Tulsi, Money Plant" 
            value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required/>

          <label style={labelStyle}>Description</label>
          <textarea style={{...inputStyle, height: '100px'}} placeholder="Plant health, age, care tips..." 
            value={form.description} onChange={(e) => setForm({...form, description: e.target.value})}/>

          <label style={labelStyle}>Status</label>
          <select style={inputStyle} value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
            <option value="Donate">🎁 Donate - Free</option>
            <option value="Sell">💰 Sell</option>
          </select>

          {form.status === 'Sell' && (
            <>
              <label style={labelStyle}>Price ₹</label>
              <input style={inputStyle} type="number" placeholder="Ex: 100" 
                value={form.price} onChange={(e) => setForm({...form, price: e.target.value})}/>
            </>
          )}

          <label style={labelStyle}>Your Location</label>
          <input style={inputStyle} type="text" placeholder="Ex: Benz Circle, Vijayawada" 
            value={form.location} onChange={(e) => setForm({...form, location: e.target.value})} required/>

          <label style={labelStyle}>Upload Plant Photo</label>
          <input style={{...inputStyle, padding: '10px'}} type="file" accept="image/*" onChange={handleImage} required/>
          
          {form.image && <img src={form.image} alt="preview" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginTop: '10px'}}/>}

          <button type="submit" style={{
            width: '100%', marginTop: '25px', padding: '16px', 
            background: 'linear-gradient(90deg, #2E7D32, #43A047)', 
            color: 'white', border: 'none', borderRadius: '12px', 
            fontWeight: 'bold', fontSize: '18px', cursor: 'pointer'
          }}>
            + Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {display: 'block', marginBottom: '8px', color: '#2E7D32', fontWeight: '600', fontSize: '14px'};
const inputStyle = {
  width: '100%', padding: '14px', marginBottom: '20px', borderRadius: '10px', 
  border: '2px solid #C8E6C9', fontSize: '15px', outline: 'none', boxSizing: 'border-box'
};

export default AddPlant;