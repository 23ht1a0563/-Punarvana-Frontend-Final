import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa"; // icons add chesanu

export default function Home() {
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  // Only localStorage nunchi plants theeskunta
  useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("plants")) || [];
    setPlants(savedPlants); // default plants ledu ippudu
  }, []);

  const filtered = plants.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.type?.toLowerCase().includes(search.toLowerCase())
  );

  // Cart lo add chese function
  const addToCart = (e, plant) => {
    e.stopPropagation(); // card click avvakunda aaptundi
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(!cart.find(p => p.id == plant.id)){
      cart.push(plant);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${plant.name} added to Cart 🛒`);
    } else {
      alert("Already in Cart!");
    }
  }

  // Wishlist lo add chese function
  const addToWishlist = (e, plant) => {
    e.stopPropagation(); // card click avvakunda aaptundi
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if(!wishlist.find(p => p.id == plant.id)){
      wishlist.push(plant);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${plant.name} added to Wishlist ❤️`);
    } else {
      alert("Already in Wishlist!");
    }
  }

  return (
    <>
      <style>{`
        .home { padding: 20px; background: #f0fdf4; min-height: 100vh; }
        .home h1 { color: #13b620; text-align: center; margin-bottom: 20px; }
        .search-bar { 
          width: 100%; max-width: 500px; padding: 14px; 
          border: 2px solid #95d5b2; border-radius: 8px; 
          font-size: 15px; margin: 0 auto 30px; display: block; outline: none;
        }
        .search-bar:focus { border-color: #19c745; }
        .plant-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .plant-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.2s;
          position: relative; /* icons kosam important */
        }
        .plant-card:hover { transform: translateY(-5px); }
        .plant-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .plant-card h3 { margin: 12px 15px 5px; color: #1b4332; }
        .plant-card p { margin: 0 15px 15px; color: #555; font-size: 14px; }
        .plant-type {
          margin: 0 15px 10px;
          display: inline-block;
          background: #d8f3dc;
          color: #1b4332;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
        }
        /* ee CSS kothaga add chesanu */
        .card-icons {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          gap: 10px;
        }
        .icon-btn {
          background: rgba(255,255,255,0.95);
          border: none;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .icon-btn:hover { transform: scale(1.1); }
        .icon-cart { color: #2d6a4f; }
        .icon-wishlist { color: #ff758f; }
      `}</style>

      <Navbar />
      <div className="home">
        <h1>Available Plants Near You 🌱</h1>

        <input 
          className="search-bar" 
          placeholder="Search plants by name or type..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />

        <div className="plant-grid">
          {filtered.length === 0 ? (
            <p style={{textAlign: 'center', gridColumn: '1/-1'}}>
              Inka plants levu babby 🌱 <br/>
              Navbar lo + icon click chesi nee first plant add chey
            </p>
          ) : (
            filtered.map(plant => (
              <div key={plant.id} className="plant-card" onClick={() => navigate(`/plant/${plant.id}`)}>
                
                {/* ee div kothaga add chesanu - icons kosam */}
                <div className="card-icons">
                  <button className="icon-btn icon-cart" onClick={(e) => addToCart(e, plant)}><FaShoppingCart /></button>
                  <button className="icon-btn icon-wishlist" onClick={(e) => addToWishlist(e, plant)}><FaHeart /></button>
                </div>

                <img src={plant.image} alt={plant.name} />
                {plant.type && <span className="plant-type">{plant.type}</span>}
                <h3>{plant.name}</h3>
                <p>By: {plant.donor || "You"}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}