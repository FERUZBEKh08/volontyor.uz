import { Link } from "react-router-dom";
import Dark from "../DarkMode";
import logo from "../public/img/logo.png";

export default function Topmedia() {
  return (
    <div className="topMedia">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <article>
          <Dark />
        </article>
      </div>
    </div>
  );
}
