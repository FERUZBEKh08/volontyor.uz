import { useEffect, useState } from "react";
 
export default function ExpertOne() {
  const [mal, setMal] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(3).json?t=2024-10-21T15%3A31%3A32.748Z"
    )
      .then((response) => response.json())
      .then((mal) => setMal(mal.news[0]))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="newsIn">
      {
        <div key={mal.id} className="box">
            <h1 className="nameNew">{mal.name}, ({mal.date}|{mal.clock})</h1>
            <img src={mal.img} alt="" />
            <h1 className="teamNew">{mal.team}</h1>
            <p>{mal.info}</p>
        </div>
      }
    </div>
  );
}
