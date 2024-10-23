import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import link from "../public/icon/link.png";
import from from "../public/icon/black-placeholder-variant.png";

export default function ExpertOne() {
  const [expert, setExpert] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(2).json"
    )
      .then((response) => response.json())
      .then((expert) => setExpert(expert.expert[2]))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="expertMal">
      <Link to="/" className="back">
        <p>&lt;&lt; Orqaga</p>
      </Link>
      {
        <div key={expert.id} className="box">
          <div className="top">
            <img src={expert.img} alt="" />
            <h2 className="name">{expert.name}</h2>
            <p>{expert.position}</p>
            <a
              className="btnSentMessages"
              href={expert.link}
              target={expert.link}
            >
              <button className="">Xabar yuborish</button>
            </a>
          </div>

          <div className="center">
            <span>
              <img className="icon" src={from} alt="" />
              <p className="centerLittles">{expert.from}</p>
            </span>
            <span>
              <img className="icon" src={link} alt="" />
              <a className="centerLittles" href={expert.link} target="__blanc">
                {expert.link}
              </a>
            </span>
          </div>

          <div className="biografiya">
            <h1>Biografiya</h1>
            <p>{expert.info}</p>
          </div>
        </div>
      }
    </div>
  );
}
