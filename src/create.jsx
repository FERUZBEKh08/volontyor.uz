import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Create() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    familya: "",
    email: "",
    parol: "",
    agreed: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/;
    const familyaRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[\w-.]+@gmail\.com$/;
    const parolRegex = /^(?=.*[!@#$%]).{8,}$/;

    if (!nameRegex.test(formData.name)) return false;
    if (!familyaRegex.test(formData.familya)) return false;
    if (!emailRegex.test(formData.email)) return false;
    if (!parolRegex.test(formData.parol)) return false;
    if (!formData.agreed) return false;

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/");
    } else {
      setError("Nimadir xato");
    }
  };

  return (
    <div className="createPage">
      <div className="in">
        <p className="top">Akkaunt yaratish</p>

        <div className="center">
          <span>
            <p>Ism</p>
            <input
              type="text"
              name="name"
              placeholder="Ism.."
              value={formData.name}
              onChange={handleChange}
            />
          </span>

          <span>
            <p>Familya</p>
            <input
              type="text"
              name="familya"
              placeholder="Familya..."
              value={formData.familya}
              onChange={handleChange}
            />
          </span>

          <span>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
            />
          </span>

          <span>
            <p>Parol</p>
            <input
              type="password"
              name="parol"
              placeholder="Parol..."
              value={formData.parol}
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="bottom">
          <span>
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />
            <p>Maxfiylik shartlari</p>
            <Link className="to" to="/join">kirish</Link>
          </span>

          {error && <p className="error">{error}</p>}

          <button onClick={handleSubmit}>
            Yaratish
          </button>

        </div>
      </div>
    </div>
  );
}
