import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import date from "../public/icon/calendar.png";
import clock from "../public/icon/clock.png";
import show from "../public/icon/show.png";

export default function School() {
  const [dars, setDars] = useState([]);

  const [material, setMaterial] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(7).json"
    )
      .then((response) => response.json())
      .then((dars) => setDars(dars.lessons));
  }, []);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(8).json"
    )
      .then((response) => response.json())
      .then((material) => setMaterial(material.material));
  }, []);

  return (
    <div className="school">
      <h1 className="vedioTop">Vediolar</h1>
      <div className="video">
        {dars.map((dars) => {
          return (
            <div className="box" key={dars.id}>
              <iframe
                src={dars.link}
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>

              <div className="bottom">
                <span>
                  <img src={date} alt="" />
                  <p>{dars.date}</p>
                </span>

                <span>
                  <img src={clock} alt="" />
                  <p>{dars.clock}</p>
                </span>

                <span>
                  <img src={show} alt="" />
                  <p>{dars.show}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="media">
        <h1 className="top">Media materiallar</h1>

        <div className="bottom">
          {material.map((news) => {
            return (
              <div key={news.id} className="box">
                <div className="topNews">
                  <img className="imgOne" src={news.img} alt="" />
                  <p className="name">{news.name}</p>
                </div>
                <h1 className="h1">{news.team}...</h1>
                <Link to={news.page} className="span">
                  <h1>Batafsil Malumot</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
