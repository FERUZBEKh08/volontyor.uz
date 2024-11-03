import { Link } from "react-router-dom";

export default function dashboard() {
  return (
    <div className="dashboard">
      <div className="top">
        <ul>
        <Link className="link" to="/dashboard">
            <li>Obunachilar</li>
          </Link>

          <Link className="link" to="/dashboard/online">
            <li>Onlayn</li>
          </Link>

          <Link className="link" to="/dashboard/benefit">
            <li>Foyda</li>
          </Link>

          <Link className="link" to="/dashboard/block">
            <li>Bloklash</li>
          </Link>

          <Link className="link" to="/dashboard/open">
            <li>Chiqarish</li>
          </Link>
        </ul>
      </div>

      <div className="bottom">
        <div className="in">
          <div className="box">
            <p>Umumiy foyda</p>

            <p>12.128 $</p>
          </div>

          <div className="box">
            <p>Yillik foyda</p>

            <p>1200 $</p>
          </div>

          <div className="box">
            <p>Yarim yillik foyda</p>

            <p>6000 $</p>
          </div>

          <div className="box">
            <p>1 oylik foyda</p>

            <p>1248 $</p>
          </div>

          <div className="box">
            <p>1 haftalik foyda</p>

            <p>231 $</p>
          </div>

          <div className="box">
            <p>1 kunlik foyda</p>

            <p>50 $</p>
          </div>

          <div className="box">
            <p>Reklamalardan foyda</p>

            <p>30 %</p>
          </div>

          <div className="box">
            <p>Obunachilardan foyda</p>

            <p>70 %</p>
          </div>
        </div>
      </div>
    </div>
  );
}
