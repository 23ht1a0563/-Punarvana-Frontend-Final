import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiMonkey } from "react-icons/gi"; // monkey icon

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(savedUser && savedUser.email === form.email && savedUser.password === form.password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  const handleClear = () => {
    setForm({ email: "", password: "" });
  };

  return (
    <>
      <style>{`
        .login-container { 
          display: flex; justify-content: center; align-items: center; 
          min-height: 100vh; 
          background: url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e') center/cover no-repeat;
          padding: 20px;
        }
        .login-box { 
          background: rgba(255, 255, 255, 0.95); 
          padding: 35px 30px; 
          border-radius: 12px; 
          width: 380px; 
          display: flex; 
          flex-direction: column; 
          gap: 15px; 
          box-shadow: 0 8px 25px rgba(0,0,0,0.2); 
        }
        .login-box h2 { 
          text-align: left; 
          color: #197e2a; 
          font-size: 26px;
          margin: 0 0 5px 0;
        }
        .blue-input { 
          width: 100%; 
          padding: 14px; 
          border: none;
          background: #a8d8ff;
          border-radius: 6px; 
          font-size: 15px; 
          box-sizing: border-box;
          outline: none;
          color: #068d4e;
        }
        .blue-input::placeholder { color: #0ea534; }
        .password-field { position: relative; display: flex; align-items: center; }
        .eye-icon { position: absolute; right: 15px; cursor: pointer; color: #21c029; font-size: 20px; }
        .btn-login { 
          padding: 14px; 
          background: #0e9266;
          color: #d4ff00;
          border: none; 
          border-radius: 6px; 
          cursor: pointer; 
          font-weight: bold; 
          font-size: 16px;
        }
        .btn-login:hover { background: #2d2d5a; }
        .btn-clear {
          padding: 12px;
          background: #e3f2ff;
          color: #1b1b3a;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }
        .forgot { text-align: center; color: #40a705; font-size: 14px; margin: 5px 0; cursor: pointer; }
        .login-box p { text-align: center; font-size: 14px; color: #12a353; margin: 0; }
        .login-box a { color: #1ba750; text-decoration: underline; font-weight: bold; }
      `}</style>

      <div className="login-container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h2>Login</h2>
          
          <input 
            type="email" 
            className="blue-input"
            placeholder="admin@gmail.com"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})} 
            required 
          />
          
          <div className="password-field">
            <input 
              type={showPass ? "text" : "password"} 
              className="blue-input"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})} 
              required 
            />
            <span onClick={() => setShowPass(!showPass)} className="eye-icon">
              {showPass ? <FaEye/> : <GiMonkey/>}
            </span>
          </div>
          
          <button type="submit" className="btn-login">Login</button>
          <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
          
          <p className="forgot">Forgot Password?</p>
          <p>Don't have account? <Link to="/register">Create Account</Link></p>
        </form>
      </div>
    </>
  );
}