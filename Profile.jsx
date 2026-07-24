import Navbar from "../components/Navbar";
export default function Profile() {
  return (<div><Navbar /><div className="home">
    <div className="profile-header">
      <img src="https://i.pravatar.cc/150" alt="profile" />
      <div><h1>Ravi Kumar</h1><p>ravi@gmail.com</p><p>📍 Hyderabad</p></div>
    </div>
  </div></div>);
}