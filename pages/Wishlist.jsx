import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(p => p.id != id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }

  return (
    <>
      <style>{`
        .page { padding: 30px; background: #f0fdf4; min-height: 100vh; }
        .page h1 { color: #1b4332; text-align: center; margin-bottom: 30px; }
        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .wishlist-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); position: relative;
        }
        .wishlist-card img { width: 100%; height: 200px; object-fit: cover; }
        .wishlist-card h3 { margin: 12px 15px 5px; color: #1b4332; }
        .wishlist-card p { margin: 0 15px 15px; color: #555; }
        .btn-remove {
          position: absolute; top: 10px; right: 10px;
          background: #e63946; color: white; border: none;
          border-radius: 50%; width: 35px; height: 35px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
      `}</style>

      <Navbar />
      <div className="page">
        <h1>Your Wishlist ❤️</h1>
        {wishlist.length === 0 ? (
          <p style={{textAlign: 'center'}}>Wishlist empty ga undi babby. Heart icon click chey</p>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map(plant => (
              <div key={plant.id} className="wishlist-card">
                <button className="btn-remove" onClick={() => removeFromWishlist(plant.id)}><FaTrash /></button>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>By: {plant.donor || "You"}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}