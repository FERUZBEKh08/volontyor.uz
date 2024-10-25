import telegram from "../public/icon/telegram.png";
import x from "../public/icon/twitter.png";
import youtube from "../public/icon/youtube.png";
import facebook from "../public/icon/facebook.png";
import instagram from "../public/icon/instagram.png";

import { Link } from "react-router-dom";

// import phone from "../public/icon/telephone.png";
// import gmail from "../public/icon/gmail.png";

//logo
import logo from "../public/img/logo.png";

export default function NavbarBottom() {
  return (
    <div className="divNavBottom">
      <div className="navBottom">
        <Link to="/">
        <img className="logo" src={logo} alt="" />

        </Link>

        <ul>
          <Link className="link" to="/about">
            <li>Biz haqimizda</li>
          </Link>

          <Link className="link" to="/school">
            <li>Volontyorlar maktabi</li>
          </Link>

          <Link className="link" to="/projects">
            <li>Loyihalar</li>
          </Link>

          <Link className="link" to="/volunteers">
            <li>Volontyorlar</li>
          </Link>

          <Link className="link" to="/news">
            <li>Yangiliklar</li>
          </Link>

          <Link className="link" to="/Be">
            <li>Volontyor bulish</li>
          </Link>
        </ul>

        <div className="two">
          <div className="smm">
            <div>
              <a href="https://web.telegram.org/k/" target="_blank">
                <img src={telegram} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} alt="" />
              </a>
            </div>
            <div>
            <a href="https://ru-ru.facebook.com/" target="_blank">
              <img src={facebook} alt="" />
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="" />
            </a>
            </div>
            <div>
            <a href="https://x.com/" target="_blank">
              <img src={x} alt="" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
