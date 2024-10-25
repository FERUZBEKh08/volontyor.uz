import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import user from "../public/icon/user.png";
import local from "../public/icon/placeholderrr.png";
import id from "../public/icon/id-card (2).png";
import gmail from "../public/icon/gmail (1).png";

export default function Volonteer() {
  const [volonteer, setVolonteer] = useState([]);

  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/Untitled%20folder/db%20(5).json"
    )
      .then((response) => response.json())
      .then((data) => {
        setVolonteer(data.volunteer.slice(10, 20));
      })
      .catch((error) => {
        console.error("Fetchda xato", error);
      });
  }, []);

  return (
    <div className="volontyorsPage">
      <div className="in">
        {volonteer.map((e) => (
          <div key={e.id} className="box">
            <div className="top">
              <img src={user} alt="" />
              <article>
                <h1> {e.name}</h1>
                <p>({e.age} yosh)</p>
              </article>
            </div>

            <div className="center">
              <span>
                <img src={id} alt="" />
                <p>{e.id}</p>
              </span>

              <span>
                <img src={local} alt="" />
                <p>{e.region}</p>
              </span>

              <span>
                <img src={gmail} alt="" />
                <p>{e.email}</p>
              </span>
            </div>

            <div className="bottom">
              <h1>Daraja:</h1>
              <p>{e.level}</p>
            </div>
          </div>
        ))}
      </div>

      <ul>
        <Link className="link" to="/volunteers">
        <li>1</li>
        </Link>

        <Link className="link" to="/volunteers/2">
        <li>2</li>
        </Link>

        <Link className="link" to="/volunteers/3">
        <li>3</li>
        </Link>

        <Link className="link" to="/volunteers/4">
        <li>4</li>
        </Link>

        <Link className="link" to="/volunteers/5">
        <li>5</li>
        </Link>
      </ul>
    </div>
  );
}
