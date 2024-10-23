import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExpertOne() {
  const [mal, setMal] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/Untitled%20folder/db.json"
    )
      .then((response) => response.json())
      .then((mal) => setMal(mal.newsall[12]))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="newsIn">
      <Link to="/news" className="back">
        <p>&lt;&lt; Orqaga</p>
      </Link>
      {
        <div key={mal.id} className="box">
          <h1 className="nameNew">
            {mal.name}, ({mal.date}|{mal.clock})
          </h1>
          <img src={mal.img} alt="" />
          <h1 className="teamNew">{mal.team}</h1>
          <p>{mal.info}</p>
        </div>
      }
    </div>
  );
}
