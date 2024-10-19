import logo from "../public/img/logo.png";

import enter from "../public/icon/enter.png";

import "@fontsource/open-sans";

export default function Navbar() {
  return (
    <div className="divNav">
      <nav className="navTop">
        <div className="one">
          <img className="logo" src={logo} alt="" />
          {/* <span>
          <p>O&#39;ZBEKISTON</p>
          <p>VOLONTYORLARI</p>
          <p>ASSOTSIATSIYASI</p>
          </span> */}
        </div>

        <ul>
          <li>Biz haqimizda</li>
          <li>Volontyorlar maktabi</li> 
          <li>Loyihalar</li>  
          <li>Volontyorlar</li>
          <li>Yangiliklar</li>
        </ul>

        <button className="btnOne">
          <img src={enter} alt="" />
          Volontyor bulish
        </button>
      </nav>
    </div>
  );
}
