import Navbar from "../components/Navbar";
import { FaLeaf, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
export default function Notifications() {
  const [notifs, setNotifs] = useState([{ id: 1, type: "new_plant", title: "New Plant Near You!", message: "Tulasi Plant 2km away", time: "5 min ago", read: false }]);
  const markAsRead = (id) => setNotifs(notifs.map(n => n.id === id ? {...n, read: true} : n));
  return (<div><Navbar /><div className="home"><h1>🔔 Notifications</h1>
    {notifs.map(n => (<div key={n.id} className={`notif-card ${n.read ? "read" : "unread"}`} onClick={() => markAsRead(n.id)}>
      <div className="notif-icon"><FaLeaf /></div>
      <div className="notif-info"><h3>{n.title}</h3><p>{n.message}</p><span>{n.time}</span></div>
      {!n.read && <div className="dot"></div>}
    </div>))}
  </div></div>);
}