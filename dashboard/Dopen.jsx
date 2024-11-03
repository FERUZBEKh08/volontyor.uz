import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dblock() {
  const [email, setEmail] = useState("");

  const handleBlock = () => {
    if (email.trim() === "" || !email.endsWith("@gmail.com")) {
      alert("Nimadir xato, qayta urinib ko'ring");
    } else {
      alert("Obunachi blokdan chiqarildi");
      setEmail("");
    }
  };

  return (
    <div className="block">
      <div className="top">
        <ul>
          <Link className="link" to="/dashboard">
            <li>Obunachilar</li>
          </Link>

          <Link className="link" to="/dashboard/online">
            <li>Onlayn</li>
          </Link>

          <Link className="link" to="/dashboard/benefit">
            <li>Foyda</li>
          </Link>

          <Link className="link" to="/dashboard/block">
            <li>Bloklash</li>
          </Link>

          <Link className="link" to="/dashboard/open">
            <li>Chiqarish</li>
          </Link>
        </ul>
      </div>

      <div className="in">
        <input
          type="text"
          placeholder="Gmail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleBlock}>Chiqarish</button>
      </div>
    </div>
  );
}
