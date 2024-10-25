import { useEffect, useState } from "react";

import "./App.css";

//comments
import Comments from "../comments/comments";

//Link
import { Link } from "react-router-dom";

//usericon

import uicon from "../public/icon/people.png";

//star icon

import star from "../public/icon/star.png";

// import stl from "../public/icon/strilka.png"

//icon

import volt from "../public/icon/volunteering.png";
import org from "../public/icon/corporation.png";
import project from "../public/icon/briefing.png";

import manGranma from "../public/icon/ManAndGrandma.svg";
import operator from "../public/icon/bank.png";

//open icon

import openIcon from "../public/icon/open.png";

//news
import clock from "../public/icon/wall-clock.png";
import date from "../public/icon/calendar.png";

export default function MainPage() {
  //volontyor
  const [mal, setMal] = useState([]);

  //news
  const [news, setNews] = useState([]);

  //experts

  const [experts, setExperts] = useState([]);

  //sponsors

  const [sponsors, setSponsors] = useState([]);

  //volontyors
  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db.json"
    )
      .then((response) => response.json())
      .then((data) => setMal(data.volunteer))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //news
  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(3).json?t=2024-10-21T15%3A31%3A32.748Z"
    )
      .then((response) => response.json())
      .then((news) => setNews(news.news))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //experts
  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db%20(2).json"
    )
      .then((response) => response.json())
      .then((news) => setExperts(news.expert))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //sponsors
  useEffect(() => {
    fetch(
      "https://cuqrwqnnguneymulgghg.supabase.co/storage/v1/object/public/zgfor/db.json"
    )
      .then((response) => response.json())
      .then((sponsors) => setSponsors(sponsors.sponsors))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //comment

  return (
    <div className="MainPage">
      <div className="topPage">
        <article>
          <p>&#39;&#39;Inson uchun xayriya qilish loyihasi&#39;&#39;</p>
          <p>
            Insonlarga rahm-shafqat ko&#39;rsating va qiyin hayotiy vaziyatlarda
            qo&#39;llab-quvvatlang.
          </p>
          <a
            className="btn2"
            target="__blanc"
            href="https://promo.click.uz/2HUz/zmsguznp"
          >
            <p className="xyr">Xayriya</p>
          </a>
        </article>
      </div>

      <div className="one">
        <div className="box">
          <p>Maqsadimiz</p>
          <h1>
            Volontyorlar va tashabbuskor guruhlarning salohiyatini ochish uchun
            qulay va qo‘llab-quvvatlovchi muhit yaratish
          </h1>

          <Link to="/about">
            <button className="btnThree">Biz haqimizda</button>
          </Link>
        </div>

        <div className="box">
          <p>Bizga qo‘shiling</p>
          <h1>
            Ro‘yxatdan o‘ting va o‘zingiz uchun yangi imkoniyatlar dunyosini
            oching, dunyo volontyorlari katta oilasining bir qismi bo‘ling
          </h1>

          <Link to="/Be">
          <button className="btnThree">A’zo bo‘lish</button>
          </Link>
        </div>

        <div className="box">
          <p>Loyihalar</p>
          <h1>
            Loyihalarimiz ezgulikni volontyorlik orqali insonlarga ulashishga
            qaratilgan
          </h1>

          <Link to="/projects">
            <button className="btnThree">Bizning loyihalar</button>
          </Link>
        </div>
      </div>

      <div className="two">
        <div className="one">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333008.992184648!2d59.30061593614458!3d40.939645982461634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sO%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1729090211634!5m2!1suz!2s"></iframe>
        </div>
        <div className="three">
          <div>
            <p className="p">VOLONTYORLAR</p>

            <article className="important">
              {mal.map((mal) => {
                return (
                  <div className="people" key={mal.id}>
                    <div className="left">
                      <img className="uicon" src={uicon} alt="" />
                      <div className="nsa">
                        <article>
                          <h1 className="name">{mal.name.toUpperCase()}</h1>
                          <h1>{mal.surname}</h1>
                        </article>
                        <article>
                          <h1>yosh: {mal.age}</h1>
                        </article>
                      </div>
                    </div>

                    <article className="right">
                      <img className="star" src={star} alt="" />
                      <h1>{mal.level}</h1>
                    </article>
                  </div>
                );
              })}
            </article>
          </div>
        </div>
      </div>

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

              <Link to="./be">
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
                <span></span>
                <p>Volontyorlarni topish</p>
              </button>
            </Link>
          </article>
          <img src={operator} alt="" />
        </div>
      </div>

      <div className="news">
        <h1 className="p mall-page">So‘nggi yangiliklar</h1>

        <div className="bottom">
          {news.map((news) => {
            return (
              <div key={news.id} className="box">
                <div className="topNews">
                  <img className="imgOne" src={news.img} alt="" />
                  <p className="name">{news.name}</p>
                </div>
                <h1 className="h1">{news.team}...</h1>
                <Link to={news.page} className="span">
                  <div className="date">
                    <img src={date} alt="" />
                    <h1>{news.date}</h1>
                  </div>

                  <div className="clock">
                    <img src={clock} alt="" />
                    <h1>{news.clock}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="experts">
        <h1 className="topInfo mall-page">Ezgulik elchilari va ekspertlar</h1>
        <div className="bottom">
          {experts.map((experts) => {
            return (
              <Link className="boxExpert" key={experts.id} to={experts.page}>
                <div>
                  <img className="expertImg" src={experts.img} alt="" />
                  <span>
                    <img src={openIcon} alt="" />
                    <h1>{experts.name}</h1>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="sponsors">
        <h1 className="topSponsors mall-page">Homiylar</h1>

        <div className="bottom">
          {sponsors.map((sponsors) => {
            return (
              <a
                key={sponsors.id}
                className="sponsor"
                href={sponsors.link}
                target="__blanc"
              >
                <img src={sponsors.logo} alt="" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="commentsPage">
        <h1 className="topCommentsPage mall-page">Izohlar</h1>
        <Comments />
      </div>
    </div>
  );
}
