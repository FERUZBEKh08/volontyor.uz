    import Tgimg from "../public/icon/telegramSend.png"
    import { Link } from "react-router-dom"

    export default function tg() {
    return (
      <div className="btnTg">
        <Link className="link" to="/send">
          <button className="tgbtn">
            <img src={Tgimg} alt="" />
          </button>
        </Link>
      </div>
    );
    }
