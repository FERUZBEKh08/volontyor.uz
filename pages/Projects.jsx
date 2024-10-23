import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import clock from "../public/icon/clock.png";
import date from "../public/icon/calendar.png";
import place from "../public/icon/black-placeholder-variant (1).png";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(12).json"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  });

  return (
    <div className="projectsPage">
      <h1 className="top">Loyihalar</h1>

      <div className="bottom">
        {projects.map((project) => (
          <Link className="link" key={project.id} to={project.page}>
            <div className="box">
              <div className="img">
                <img src={project.img} alt="" />
              </div>
              <div className="bottom">
                <h1>{project.name}</h1>
                <div className="mal">
                  <span>
                    <img src={date} alt="" />
                    <p>{project.date}</p>
                  </span>

                  <span>
                    <img src={clock} alt="" />
                    <p>{project.clock}</p>
                  </span>

                  <span>
                    <img src={place} alt="" />
                    <p>{project.place}</p>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
