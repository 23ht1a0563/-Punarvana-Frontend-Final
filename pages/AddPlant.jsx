import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPlant() {
  const [form, setForm] = useState({ name: "", description: "", type: "", image: "" });
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  // Photo upload chesinappudu preview kosam
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setForm({...form, image: reader.result}); // base64 lo save
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const plants = JSON.parse(localStorage.getItem("plants")) || [];
    plants.push({...form, id: Date.now()});
    localStorage.setItem("plants", JSON.stringify(plants));
    alert("Plant Added Successfully!");
    navigate("/"); // home ki veltundi
  };

  return (
    <>
      <style>{`
       .addplant-container {
          display: flex; justify-content: center; align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #d8f3dc 0%, #95d5b2 100%);
          padding: 20px;
        }
       .addplant-box {
          background: white;
          padding: 35px 30px;
          border-radius: 16px;
          width: 420px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
       .addplant-box h2 {
          text-align: center;
          color: #1b4332;
          font-size: 24px;
          margin: 0 0 10px 0;
        }
       .green-input {
          width: 100%;
          padding: 14px;
          border: 1px solid #d8f3dc;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 15px;
          box-sizing: border-box;
          outline: none;
        }
       .green-input:focus { border: 1px solid #2d6a4f; background: white; }
       .green-input[type="file"] { padding: 10px; background: white; }
       .preview-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px dashed #95d5b2;
        }
       .btn-add {
          padding: 14px;
          background: #1b4332;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          font-size: 16px;
        }
       .btn-add:hover { background: #2d6a4f; }
      `}</style>

      <div className="addplant-container">
        <form className="addplant-box" onSubmit={handleSubmit}>
          <h2>🌱 Add New Plant</h2>

          <input
            type="text"
            className="green-input"
            placeholder="Plant Name"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            required
          />

          <select
            className="green-input"
            value={form.type}
            onChange={(e) => setForm({...form, type: e.target.value})}
            required
          >
            <option value="">Select Plant Type</option>
            <option value="Indoor">Indoor Plant</option>
            <option value="Outdoor">Outdoor Plant</option>
            <option value="Medicinal">Medicinal Plant</option>
            <option value="Flowering">Flowering Plant</option>
            <option value="Succulent">Succulent</option>
          </select>

          <textarea
            className="green-input"
            placeholder="Description"
            rows="3"
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            required
          ></textarea>

          <input
            type="file"
            className="green-input"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />

          {preview && <img src={preview} alt="preview" className="preview-img" />}

          <button type="submit" className="btn-add">Add Plant</button>
        </form>
      </div>
    </>
  );
}