import { useState, useEffect } from "react";
import telegram from "../public/icon/telegram.png";
import x from "../public/icon/twitter.png";
import youtube from "../public/icon/youtube.png";
import facebook from "../public/icon/facebook.png";
import instagram from "../public/icon/instagram.png";
import { Link } from "react-router-dom";
import logo from "../public/img/logo.png";

export default function NavbarBottom() {
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
    <div className="divNavBottom">
      {loading && (
        <div className="loaderPage">
          <span className="loader"></span>
        </div>
      )}
      <div className="navBottom">
        <Link to="/" onClick={handleLoader}>
          <img className="logo" src={logo} alt="" />
        </Link>

        <ul>
          <Link className="link" to="/about" onClick={handleLoader}>
            <li>Biz haqimizda</li>
          </Link>
          <Link className="link" to="/school" onClick={handleLoader}>
            <li>Volontyorlar maktabi</li>
          </Link>
          <Link className="link" to="/projects" onClick={handleLoader}>
            <li>Loyihalar</li>
          </Link>
          <Link className="link" to="/volunteers" onClick={handleLoader}>
            <li>Volontyorlar</li>
          </Link>
          <Link className="link" to="/news" onClick={handleLoader}>
            <li>Yangiliklar</li>
          </Link>
          <Link className="link" to="/be" onClick={handleLoader}>
            <li>Volontyor bulish</li>
          </Link>
          <Link className="link" to="/create" onClick={handleLoader}>
            <li>Kirish</li>
          </Link>
        </ul>

        <div className="two">
          <div className="smm">
            <div>
              <a href="https://web.telegram.org/k/" target="_blank" onClick={handleLoader}>
                <img src={telegram} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/" target="_blank" onClick={handleLoader}>
                <img src={youtube} alt="" />
              </a>
            </div>
            <div>
              <a href="https://ru-ru.facebook.com/" target="_blank" onClick={handleLoader}>
                <img src={facebook} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank" onClick={handleLoader}>
                <img src={instagram} alt="" />
              </a>
            </div>
            <div>
              <a href="https://x.com/" target="_blank" onClick={handleLoader}>
                <img src={x} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
