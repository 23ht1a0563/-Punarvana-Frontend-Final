import Navbar from "../components/Navbar";
export default function MyOrders() {
  const orders = [{ id: 1, plantName: "Mango Tree", status: "Picked Up" }];
  return (<div><Navbar /><div className="home"><h1>📦 My Orders</h1>
  {orders.map(order => (<div key={order.id} className="cart-card"><h3>{order.plantName}</h3><p>Status: {order.status}</p></div>))}
  </div></div>);
}