import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//icons

import date from "../public/icon/calendar.png";
import clock from "../public/icon/clock.png";
import user from "../public/icon/user.png";
import local from "../public/icon/black-placeholder-variant (1).png";
import quailty from "../public/icon/quality.png";
import group from "../public/icon/group.png";

export default function ProjectsTwo() {
  const [mal, setMal] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(12).json"
    )
      .then((response) => response.json())
      .then((mal) => setMal(mal.projects[1]));
  });

  return (
    <div className="ProjectsIn">
      <Link
       to="/projects"
       className="back">&lt;&lt; Orqaga</Link>
      {
        <div key={mal.id} className="box">
          <h1 className="name">{mal.name}</h1>
          <img src={mal.img} alt="" />

          <div className="bottom">
            <div className="left in">
              <span>
                <img src={date} alt="" />
                <h1>{mal.date}</h1>
              </span>
              <span>
                <img src={local} alt="" />
                <h1>{mal.place}</h1>
              </span>

              <span>
                <img src={user} alt="" />
                <h1>{mal.volunteer}</h1>
              </span>
            </div>

            <div className="right in">
              <span>
                <img src={clock} alt="" />
                <h1>{mal.clock}</h1>
              </span>

              <span>
                <img src={quailty} alt="" />
                <h1>{mal.have}</h1>
              </span>

              <span>
                <img src={group} alt="" />
                <h1>{mal.interist}</h1>
              </span>
            </div>
          </div>

          <div className="about">
            <h1>Loyiha haqida</h1>

            <p>{mal.about}</p>
          </div>
        </div>
      }
    </div>
  );
}
