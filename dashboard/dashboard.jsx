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
            <p>Barcha obunachilar</p>

            <p>12.128</p>
          </div>

          <div className="box">
            <p>Adminlar</p>

            <p>3</p>
          </div>

          <div className="box">
            <p>Expertlar</p>

            <p>12</p>
          </div>

          <div className="box">
            <p>1+ yillik obunachilar</p>

            <p>2348</p>
          </div>

          <div className="box">
            <p>1 yillik obunachilar</p>

            <p>7228</p>
          </div>

          <div className="box">
            <p>1 oylik obunachilar</p>

            <p>1128</p>
          </div>

          <div className="box">
            <p>1 haftalik obunachilar</p>

            <p>1028</p>
          </div>

          <div className="box">
            <p>1 kunlik obunachilar</p>

            <p>124</p>
          </div>
        </div>
      </div>
    </div>
  );
}
