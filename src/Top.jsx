import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dark from "../DarkMode";
import logo from "../public/img/logo.png";

export default function Topmedia() {
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
    <div className="topMedia">
      {loading && (
        <div className="loaderPage">
          <span className="loader"></span>
        </div>
      )}
      <div>
        <Link to="/" onClick={handleLoader}>
          <img src={logo} alt="Logo" />
        </Link>

        <Link className="link" to="/be" onClick={handleLoader}>
          Volontyorlik
        </Link>

        <Link className="link" to="/create" onClick={handleLoader}>
          Kirish
        </Link>

        <article>
          <Dark />
        </article>
      </div>
    </div>
  );
}
