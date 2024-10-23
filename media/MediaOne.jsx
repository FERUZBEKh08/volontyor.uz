import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ExpertOne() {
  const [mal, setMal] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(9).json?t=2024-10-22T12%3A07%3A10.776Z"
    )
      .then((response) => response.json())
      .then((mal) => setMal(mal.material[0]))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="newsIn">
      <Link to="/school" className="back">
        <p>&lt;&lt; Orqaga</p>
      </Link>
      {
        <div key={mal.id} className="box">
          <h1 className="nameNew">{mal.name}</h1>
          <img src={mal.img} alt="" />
          <h1 className="teamNew">{mal.team}</h1>
          <p>{mal.info}</p>
        </div>
      }
    </div>
  );
}
