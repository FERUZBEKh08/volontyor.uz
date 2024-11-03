import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import School from "../public/icon/schoolB.png";
import News from "../public/icon/blogB.png";
import Volunteers from "../public/icon/volunteerB.png";
import AboutUs from "../public/icon/fileB.png";
import Project from "../public/icon/project-managementB.png";

export default function Medianav() {
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
    <div className="medianav">
      {loading && (
        <div className="loaderPage">
          <span className="loader"></span>
        </div>
      )}

      <article>
        <Link className="span" to="/about" onClick={handleLoader}>
          <img src={AboutUs} alt="" />
          <p>Haqimizda</p>
        </Link>

        <Link className="span" to="/school" onClick={handleLoader}>
          <img src={School} alt="" />
          <p>Maktabimiz</p>
        </Link>

        <Link className="span" to="/projects" onClick={handleLoader}>
          <img src={Project} alt="" />
          <p>Loyihalar</p>
        </Link>

        <Link className="span" to="/volunteers" onClick={handleLoader}>
          <img src={Volunteers} alt="" />
          <p>Volontyorlar</p>
        </Link>

        <Link className="span" to="/news" onClick={handleLoader}>
          <img src={News} alt="" />
          <p>Yangiliklar</p>
        </Link>
      </article>
    </div>
  );
}
