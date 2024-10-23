import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import clock from "../public/icon/wall-clock.png";
import date from "../public/icon/calendar.png";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/Untitled%20folder/db%20(4).json"
    )
      .then((response) => response.json())
      .then((news) => setNews(news.newsall))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="News">
      <div className="news">
        <h1 className="p">So‘nggi yangiliklar</h1>

        <div className="bottom">
          {news.map((news) => {
            return (
              <div key={news.id} className="box">
                <div className="topNews">
                  <img className="imgOne" src={news.img} alt="" />
                  <p className="name">{news.name}</p>
                </div>
                <h1 className="h1">{news.team}...</h1>
                <Link to={news.page} className="span">
                  <div className="date">
                    <img src={date} alt="" />
                    <h1>{news.date}</h1>
                  </div>

                  <div className="clock">
                    <img src={clock} alt="" />
                    <h1>{news.clock}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
