import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const plants = JSON.parse(localStorage.getItem('plants')) || [];

  return (
    <div style={{background: 'linear-gradient(180deg, #E8F5E9 0%, #F1F8E9 100%)', minHeight: '100vh', fontFamily: "'Poppins', sans-serif"}}>
      
      {/* HERO SECTION */}
      <div style={{textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(90deg, #2E7D32, #66BB6A)'}}>
        <h1 style={{color: 'white', fontSize: '3rem', margin: '0', fontWeight: '700'}}>🌿 Punarvana</h1>
        <p style={{color: '#E8F5E9', fontSize: '1.2rem', marginTop: '10px'}}>Rescue Plants, Save Earth 🌍</p>
        <Link to="/add-plant">
          <button style={{marginTop: '20px', padding: '15px 30px', fontSize: '16px', background: 'white', color: '#2E7D32', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'}}>
            + Add Plant to Rescue
          </button>
        </Link>
      </div>

      {/* STATS SECTION */}
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', padding: '30px 20px', flexWrap: 'wrap'}}>
        {['Plants Listed', 'Plants Rescued', 'Active Users'].map((title, i) => (
          <div key={i} style={{background: 'white', padding: '20px 30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 20px rgba(46,125,50,0.1)', minWidth: '180px'}}>
            <h2 style={{color: '#2E7D32', margin: '0', fontSize: '2.5rem'}}>{plants.length + i*10}</h2>
            <p style={{color: '#555', margin: '5px 0 0 0', fontWeight: '500'}}>{title}</p>
          </div>
        ))}
      </div>

      {/* PLANTS SECTION */}
      <div style={{padding: '20px 50px'}}>
        <h2 style={{color: '#1B5E20', fontSize: '2rem'}}>🌱 Plants Near You</h2>
        
        {plants.length === 0 ? (
          <p style={{textAlign: 'center', color: '#555', marginTop: '40px'}}>Inka plants levu. First plant ni nuvve add chey! 👆</p>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginTop: '20px'}}>
            {plants.map((plant) => (
              <div key={plant.id} style={{background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s', cursor: 'pointer'}}
                   onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                
                {/* IMAGE */}
                <img src={plant.image} alt={plant.name} style={{width: '100%', height: '200px', objectFit: 'cover'}}/>
                
                <div style={{padding: '15px'}}>
                  <h3 style={{margin: '0', color: '#2E7D32'}}>{plant.name}</h3>
                  <p style={{margin: '5px 0', color: '#555'}}>📍 {plant.location}</p>
                  <p style={{margin: '5px 0', color: '#FF8F00', fontWeight: 'bold'}}>For {plant.status}</p>
                  <button style={{width: '100%', marginTop: '10px', padding: '12px', background: 'linear-gradient(90deg, #2E7D32, #66BB6A)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>
                    Rescue Plant
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{background: '#1B5E20', color: 'white', textAlign: 'center', padding: '25px', marginTop: '50px'}}>
        <p style={{margin: '0'}}>🌱 Punarvana Nursery - Rescue Plants, Save Earth</p>
        <p style={{margin: '5px 0 0 0', fontSize: '14px'}}>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;