import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(p => p.id != id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <>
      <style>{`
        .page { padding: 30px; background: #f0fdf4; min-height: 100vh; }
        .page h1 { color: #1b4332; text-align: center; margin-bottom: 30px; }
        .cart-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .cart-card {
          background: white; border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); position: relative;
        }
        .cart-card img { width: 100%; height: 200px; object-fit: cover; }
        .cart-card h3 { margin: 12px 15px 5px; color: #1b4332; }
        .cart-card p { margin: 0 15px 15px; color: #555; }
        .btn-remove {
          position: absolute; top: 10px; right: 10px;
          background: #e63946; color: white; border: none;
          border-radius: 50%; width: 35px; height: 35px;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
      `}</style>

      <Navbar />
      <div className="page">
        <h1>Your Cart 🛒</h1>
        {cart.length === 0 ? (
          <p style={{textAlign: 'center'}}>Cart empty ga undi babby. Home nunchi add chey</p>
        ) : (
          <div className="cart-grid">
            {cart.map(plant => (
              <div key={plant.id} className="cart-card">
                <button className="btn-remove" onClick={() => removeFromCart(plant.id)}><FaTrash /></button>
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