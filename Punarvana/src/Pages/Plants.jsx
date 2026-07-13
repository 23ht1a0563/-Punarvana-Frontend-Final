import React, { useState } from 'react';

const Plants = () => {
  const [search, setSearch] = useState('');
  const plants = JSON.parse(localStorage.getItem('plants')) || [];

  const filteredPlants = plants.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{background: '#F1F8E9', minHeight: '100vh', padding: '40px 20px', fontFamily: "'Poppins', sans-serif"}}>
      
      {/* HEADER */}
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h1 style={{fontSize: '2.5rem', color: '#1B5E20', margin: '0'}}>🌿 Discover Plants</h1>
        <p style={{color: '#555'}}>Rescue a plant near you and give it a new home</p>
      </div>

      {/* SEARCH BAR */}
      <div style={{maxWidth: '700px', margin: '0 auto 40px'}}>
        <input 
          type="text" 
          placeholder="🔍 Search by Plant name or Location..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '16px 20px', borderRadius: '50px', 
            border: '2px solid #A5D6A7', fontSize: '16px', outline: 'none',
            boxShadow: '0 4px 15px rgba(46,125,50,0.1)'
          }}
        />
      </div>

      {/* PLANT CARDS GRID */}
      {filteredPlants.length === 0 ? (
        <p style={{textAlign: 'center', fontSize: '18px', color: '#555'}}>No plants found 😔 Try adding one!</p>
      ) : (
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {filteredPlants.map((plant) => (
            <div key={plant.id} style={{
              background: 'white', borderRadius: '20px', overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              
              {/* IMAGE */}
              <img 
                src={plant.image} 
                alt={plant.name} 
                style={{width: '100%', height: '220px', objectFit: 'cover'}}
              />
              
              <div style={{padding: '20px'}}>
                <h3 style={{margin: '0 0 10px 0', color: '#2E7D32', fontSize: '22px', textTransform: 'capitalize'}}>
                  {plant.name}
                </h3>
                
                <p style={{margin: '5px 0', color: '#555', fontSize: '14px'}}>👤 {plant.owner || 'beauty'}</p>
                <p style={{margin: '5px 0', color: '#555', fontSize: '14px'}}>📍 {plant.location}</p>
                
                <p style={{margin: '10px 0', fontWeight: 'bold', color: plant.status === 'Donate' ? '#2E7D32' : '#FF8F00'}}>
                  Type: {plant.status} {plant.status === 'Donate' && '- Free'}
                </p>

                <p style={{margin: '10px 0', color: '#666', fontSize: '14px', minHeight: '40px'}}>
                  {plant.description || 'No description'}
                </p>

                <button style={{
                  width: '100%', marginTop: '15px', padding: '14px', 
                  background: 'linear-gradient(90deg, #2E7D32, #43A047)', 
                  color: 'white', border: 'none', borderRadius: '12px', 
                  fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'
                }}>
                  Contact Owner
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;