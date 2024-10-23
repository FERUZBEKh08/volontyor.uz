import notFount from "../public/img/page 404.jpg";

import { Link } from "react-router-dom";
export default function NotFount() {
  return (
    <div className="notFount">
      <div>
        <img src={notFount} alt="" />
        <Link className="btn" to="/">Asosiy sahifaqa qaytish</Link>
      </div>
    </div>
  );
}
