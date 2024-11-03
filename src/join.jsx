import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "shukrullaev@gmail.com" && password === "abcd1234") {
      navigate("/");
    } else {
      alert("Xato! Email yoki parol noto'g'ri."); // Noto'g'ri kiritilsa xabar
    }
  };

  return (
    <div className="join">
      <div className="in">
        <p className="top">Kirish</p>

        <div className="center">
          <span>
            <p>Email</p>
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <p>Parol</p>
            <input
              type="password"
              placeholder="Parol..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </div>

        <div className="bottom">
          <button onClick={handleLogin}>Kirish</button>
        </div>
      </div>
    </div>
  );
}
