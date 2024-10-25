import School from "../public/icon/schoolB.png";
import News from "../public/icon/blogB.png";
import Volunteers from "../public/icon/volunteerB.png";
import AboutUs from "../public/icon/fileB.png";
import Project from "../public/icon/project-managementB.png";

import { Link } from "react-router-dom";

export default function Medianav() {
  return (
    <div className="medianav">
      <article>
        <Link className="span" to="/about">
          <img src={AboutUs} alt="" />
          <p>Haqimizda</p>
        </Link>

        <Link  className="span" to="/school">
          <img src={School} alt="" />
          <p>Maktabimiz</p>
        </Link>

        <Link  className="span" to="/projects">
          <img src={Project} alt="" />
          <p>Loyihalar</p>
        </Link>

        <Link  className="span" to="/volunteers">
          <img src={Volunteers} alt="" />
          <p>Volontyorlar</p>
        </Link>

        <Link  className="span" to="/news">
          <img src={News} alt="" />
          <p>Yangiliklar</p>
        </Link>
      </article>
    </div>
  );
}
