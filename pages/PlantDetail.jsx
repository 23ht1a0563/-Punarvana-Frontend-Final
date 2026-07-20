import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaTrash, FaHeart, FaShoppingCart, FaShoppingBag } from "react-icons/fa";

export default function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("plants")) || [];
    const foundPlant = savedPlants.find(p => p.id == id); // == use chesanu string vs number kosam
    setPlant(foundPlant);
  }, [id]);

  const handleDelete = () => {
    let savedPlants = JSON.parse(localStorage.getItem("plants")) || [];
    savedPlants = savedPlants.filter(p => p.id!= id);
    localStorage.setItem("plants", JSON.stringify(savedPlants));
    alert("Plant Deleted!");
    navigate("/");
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if(!cart.find(p => p.id == plant.id)){
      cart.push(plant);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${plant.name} added to Cart 🛒`);
    } else {
      alert("Already in Cart!");
    }
  }

  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if(!wishlist.find(p => p.id == plant.id)){
      wishlist.push(plant);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${plant.name} added to Wishlist ❤️`);
    } else {
      alert("Already in Wishlist!");
    }
  }

  const orderNow = () => {
    addToCart(); // mundu cart lo add chey
    navigate("/cart"); // tarvata cart page ki vellu
  }

  if(!plant) return <div style={{textAlign:'center', padding: '50px'}}>Plant not found...</div>

  return (
    <>
      <style>{`
      .details-container { background: #f0fdf4; min-height: 100vh; padding: 20px; }
      .details-card {
          max-width: 800px; margin: 30px auto; background: white;
          border-radius: 16px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
      .details-img { width: 100%; height: 350px; object-fit: cover; }
      .details-info { padding: 30px; }
      .details-info h1 { color: #1b4332; margin: 0 0 10px; }
      .details-type {
          display: inline-block; background: #d8f3dc; color: #1b4332;
          padding: 6px 14px; border-radius: 20px; font-size: 14px; margin-bottom: 15px;
        }
      .details-info p { font-size: 16px; color: #444; line-height: 1.6; }
      .btn-back {
          background: #1b4332; color: white; border: none; padding: 12px 20px;
          border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px; margin-bottom: 20px;
        }
      .btn-delete {
          background: #e63946; color: white; border: none; padding: 12px 20px;
          border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px;
        }
      .btn-cart {
          background: #2d6a4f; color: white; border: none; padding: 12px 20px;
          border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px;
        }
      .btn-wishlist {
          background: #ff758f; color: white; border: none; padding: 12px 20px;
          border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px;
        }
      .btn-order {
          background: #40916c; color: white; border: none; padding: 12px 20px;
          border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px;
          font-weight: bold;
        }
      .btn-group { display: flex; gap: 15px; margin-top: 20px; flex-wrap: wrap; }
      `}</style>

      <Navbar />
      <div className="details-container">
        <div className="details-card">
          <img src={plant.image} alt={plant.name} className="details-img" />
          <div className="details-info">
            <button className="btn-back" onClick={() => navigate("/")}><FaArrowLeft /> Back</button>
            <h1>{plant.name}</h1>
            <span className="details-type">{plant.type}</span>
            <p><b>Donor:</b> {plant.donor || "You"}</p>
            <p><b>Description:</b> {plant.description}</p>

            <div className="btn-group">
              <button className="btn-order" onClick={orderNow}><FaShoppingBag /> Order Now</button>
              <button className="btn-cart" onClick={addToCart}><FaShoppingCart /> Add to Cart</button>
              <button className="btn-wishlist" onClick={addToWishlist}><FaHeart /> Wishlist</button>
              <button className="btn-delete" onClick={handleDelete}><FaTrash /> Delete Plant</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}