import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", address: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if(form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        .auth-container { 
          display: flex; justify-content: center; align-items: center; 
          min-height: 100vh; 
          background: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e') center/cover no-repeat;
          padding: 20px;
        }
        .auth-box { 
          background: rgba(255, 255, 255, 0.95); 
          padding: 35px 30px; 
          border-radius: 12px; 
          width: 400px; 
          display: flex; 
          flex-direction: column; 
          gap: 15px; 
          box-shadow: 0 8px 25px rgba(0,0,0,0.2); 
        }
        .auth-box h2 { 
          text-align: center; 
          color: #12c038; 
          font-size: 24px;
          margin: 0 0 5px 0;
        }
        .auth-box h2 span { font-size: 14px; color: #555; font-weight: normal; display: block; }
        .blue-input { 
          width: 100%; 
          padding: 14px; 
          border: none;
          background: #c0c6ca;
          border-radius: 6px; 
          font-size: 15px; 
          box-sizing: border-box;
          outline: none;
          color: #1b1b3a;
        }
        .blue-input::placeholder { color: #1b9662; }
        .password-field { position: relative; display: flex; align-items: center; }
        .eye-icon { position: absolute; right: 15px; cursor: pointer; color: #28a032; font-size: 20px; }
        .btn-register { 
          padding: 14px; 
          background: #1ce92d;
          color: #c40b67;
          border: none; 
          border-radius: 6px; 
          cursor: pointer; 
          font-weight: bold; 
          font-size: 16px;
        }
        .btn-register:hover { background: #0bbb23; }
        .auth-box p { text-align: center; font-size: 14px; color: #333; margin: 0; }
        .auth-box a { color: #15c423; text-decoration: underline; font-weight: bold; }
      `}</style>

      <div className="auth-container">
        <form className="auth-box" onSubmit={handleSubmit}>
          <h2>Punarvana <span>Create Account</span></h2>
          
          <input type="text" className="blue-input" placeholder="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input type="email" className="blue-input" placeholder="admin@gmail.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
          
          <div className="password-field">
            <input type={showPass ? "text" : "password"} className="blue-input" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required />
            <span onClick={() => setShowPass(!showPass)} className="eye-icon">
              {showPass ? <FaEye/> : <GiMonkey/>}
            </span>
          </div>

          <div className="password-field">
            <input type={showConfirm ? "text" : "password"} className="blue-input" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({...form, confirmPassword: e.target.value})} required />
            <span onClick={() => setShowConfirm(!showConfirm)} className="eye-icon">
              {showConfirm ? <FaEye/> : <GiMonkey/>}
            </span>
          </div>

          <input type="text" className="blue-input" placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} required />
          
          <button type="submit" className="btn-register">Register</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </>
  );
}