import volt from "../public/icon/volunteering.png";
import org from "../public/icon/corporation.png";
import project from "../public/icon/briefing.png";

import manGranma from "../public/icon/ManAndGrandma.svg";
import operator from "../public/icon/bank.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="aboutPage">
      <h1 className="top">Biz haqimizda</h1>
      <p className="p">
        Volontyorlik - bu yerda har bir kishi uz kuchiga investitsiya qilishga
        tayyor, vaqt, bilim va konikmalar ixtiyoriy ravishda tanlangan yaxshi
        ish. Shirin Abidova, uzbekiston volontyorlari assotsiyatsiyasi
        direktori. Biz ulkan loyihalar va ijodiy goyalarni amalga oshirish
        yolida vositachi bolgan Ozbekiston kongillilarining tashabbuskor
        guruhlarini birlashtirish va targib qilishga xizmat qilamiz. Keyinchalik
        kongillilar uchun yangi imkoniyatlar yaratadigan xalqaro loyihalar,
        tadbirlar, ixtiyoriy aksiyalar yigamiz. Har bir inson volontyor lish
        orqali barqaror kelajakni rivojlantirishi va kuchli fuqarolik jamiyatini
        qurishda hissa qoshishi mumkin.
      </p>

      <div className="bottom">
        <div className="four">
          <div className="box">
            <img className="icon" src={volt} alt="" />
            <article>
              <div>
                <p>26,422</p>
                <p>Volontyorlar</p>
              </div>
            </article>
          </div>

          <div className="box">
            <img className="icon" src={org} alt="" />
            <article>
              <div>
                <p>61</p>
                <p>Tashkilotlar</p>
              </div>
            </article>
          </div>

          <div className="box">
            <img className="icon" src={project} alt="" />
            <article>
              <div>
                <p>31</p>
                <p>Loyihalar</p>
              </div>
            </article>
          </div>
        </div>

        <div className="five">
          <div className="box">
            <article>
              <p>Volontyor bo‘lishni xohlaysizmi?</p>
              <p className=".p">
                Agar siz loyiha yoki tashkilotga yordam berishni istasangiz, bu
                yerga o‘ting
              </p>

              <Link to="/be">
                <button className="btnFour">Yordam berishni xohlayman</button>
              </Link>
            </article>
            <img src={manGranma} alt="" />
          </div>

          <div className="box">
            <article>
              <p>Volontyorlar kerakmi?</p>
              <p>
                Sizning tashkilot volontyorlar yordami kerakmi, unda bu yerga
                uting
              </p>

              <Link to="/volunteers">
                <button className="btnFour">
                Volontyorlarni topish
                </button>
              </Link>
            </article>
            <img src={operator} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
