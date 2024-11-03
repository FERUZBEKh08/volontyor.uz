import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

import logo from "../public/img/logo.png";
import enter from "../public/icon/enter.png";

import "@fontsource/open-sans";
import Dark from "../DarkMode";

export default function Navbar() {
  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);
  
  return (
    <div className="divNav">
      <nav className="navTop">
        <div className="one">
          <Link className="link" to="/">
            <img onClick={handleLoader} className="logo" src={logo} alt="" />
          </Link>
        </div>

        <ul>
          <Link className="link" to="/about" onClick={handleLoader}>
            <li>Biz haqimizda</li>
          </Link>
          <Link to="/school" className="link" onClick={handleLoader}>
            <li>Volontyorlar maktabi</li>
          </Link>
          <Link to="/projects" className="link" onClick={handleLoader}>
            <li>Loyihalar</li>
          </Link>
          <Link to="/volunteers" className="link" onClick={handleLoader}>
            <li>Volontyorlar</li>
          </Link>
          <Link to="/news" className="link" onClick={handleLoader}>
            <li>Yangiliklar</li>
          </Link>
          <Link to="/be" onClick={handleLoader} className="btnOne">
            <img src={enter} alt="" />
            Volontyor bulish
          </Link>
        </ul>

        <Link to="/create" className="link" onClick={handleLoader}>
          <button className="kirishBtn">Kirish</button>
        </Link>

        <Dark />
      </nav>

      {loading && (
        <div className="loaderPage">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}
