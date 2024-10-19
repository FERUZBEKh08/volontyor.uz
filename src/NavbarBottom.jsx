import telegram from "../public/icon/telegram.png";
import x from "../public/icon/twitter.png";
import youtube from "../public/icon/youtube.png";
import facebook from "../public/icon/facebook.png";
import instagram from "../public/icon/instagram.png";

// import phone from "../public/icon/telephone.png";
// import gmail from "../public/icon/gmail.png";

//logo
import logo from "../public/img/logo.png"

export default function NavbarBottom() {
  return (
    <div className="divNavBottom">
      <div className="navBottom">

        <img className="logo" src={logo} alt="" />

        <ul>
          <li>Biz haqimizda</li>
          <li>Volontyorlar maktabi</li>
          <li>Loyihalar</li>
          <li>Volontyorlar</li>
          <li>Yangiliklar</li>
          <li>Volontyor bulish</li>
        </ul>

        <div className="two">
        <div className="smm">
          <div>
            <img src={telegram} alt="" />
          </div>
          <div>
            <img src={youtube} alt="" />
          </div>
          <div>
            <img src={facebook} alt="" />
          </div>
          <div>
            <img src={instagram} alt="" />
          </div>
          <div>
            <img src={x} alt="" />
          </div>

        </div>
        {/* <article>
        <div className="mail">
            <img src={gmail} alt="" />
            <h1>volontyor@gmail.com</h1>
          </div>

          <div className="phone">
            <img src={phone} alt="" />
            <h1>+998 91 954 69 87</h1>
          </div>
        </article> */}
        </div>
      </div>
    </div>
  );
}
