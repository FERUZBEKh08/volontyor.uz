import { Link } from "react-router-dom";
import { useState } from "react";

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

  return (
    <div className="divNav">
      <nav className="navTop">
        <div className="one">
          <Link className="link" to="/">
            <img onClick={handleLoader} className="logo" src={logo} alt="" />
          </Link>
        </div>

        <ul>
          <Link className="link" to="/about">
            <li onClick={handleLoader}>Biz haqimizda</li>
          </Link>
          <Link to="/school" className="link">
            <li onClick={handleLoader}>Volontyorlar maktabi</li>
          </Link>
          <Link to="/projects" className="link">
            <li onClick={handleLoader}>Loyihalar</li>
          </Link>
          <Link to="/volunteers" className="link">
            <li onClick={handleLoader}>Volontyorlar</li>
          </Link>
          <Link to="/news" className="link">
            <li onClick={handleLoader}>Yangiliklar</li>
          </Link>
          <button onClick={handleLoader} className="btnOne">
            <img src={enter} alt="" />
            Volontyor bulish
          </button>
        </ul>

        {/* <Link to="/create">
          <button>Ruyhatdan utish</button>
        </Link> */}

        <Dark/>
      </nav>

      {loading && (
        <div className="loaderPage">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}
