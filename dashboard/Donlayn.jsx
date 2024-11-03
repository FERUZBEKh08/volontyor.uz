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
            <p>Umumiy onlayn</p>

            <p>12.128</p>
          </div>

          <div className="box">
            <p>Yillik onlayn</p>

            <p>5001</p>
          </div>

          <div className="box">
            <p>6 oylik onlayn</p>

            <p>2000</p>
          </div>

          <div className="box">
            <p>1 oylik onlayn</p>

            <p>922</p>
          </div>

          <div className="box">
            <p>15 kunlik onlayn</p>

            <p>453</p>
          </div>

          <div className="box">
            <p>1 haftalik onlayn</p>

            <p>232</p>
          </div>

          <div className="box">
            <p>1 kunlik onlayn</p>

            <p>73</p>
          </div>

          <div className="box">
            <p>Jonli onlayn</p>

            <p>32</p>
          </div>
        </div>
      </div>
    </div>
  );
}
