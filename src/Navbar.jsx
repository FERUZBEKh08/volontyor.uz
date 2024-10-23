import { Link } from "react-router-dom";

import logo from "../public/img/logo.png";
import enter from "../public/icon/enter.png";

import "@fontsource/open-sans";

export default function Navbar() {
  return (
    <div className="divNav">
      <nav className="navTop">
        <div className="one">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>

        <ul>
          <Link className="link" to="/about">
            <li>Biz haqimizda</li>
          </Link>
          <Link to="/school" className="link">
          <li>Volontyorlar maktabi</li>
          </Link>
          <Link to="/projects" className="link">
          <li>Loyihalar</li>
          </Link>
          <Link to="/volonteers" className="link">
          <li>Volontyorlar</li>
          </Link>
          <Link to="/news" className="link">
          <li>Yangiliklar</li>
          </Link>



        </ul>

        <button>dark</button>

        <button className="btnOne">
          <img src={enter} alt="" />
          Volontyor bulish
        </button>
      </nav>
    </div>
  );
}
