import Navbar from "../components/Navbar";
export default function MyPlants() {
  const myPlants = [{ id: 1, plantName: "Tulasi", status: "Available" }];
  return (<div><Navbar /><div className="home"><h1>🌿 My Listed Plants</h1>
  {myPlants.map(plant => (<div key={plant.id} className="cart-card"><h3>{plant.plantName}</h3><p>Status: {plant.status}</p></div>))}
  </div></div>);
}