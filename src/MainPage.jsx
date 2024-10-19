import { useEffect, useState } from "react";

import "./App.css";

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

import openIcon from "../public/icon/open.png"

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


  //volontyors
  useEffect(() => {
    fetch("http://localhost:3000/volunteer")
      .then((response) => response.json())
      .then((data) => setMal(data))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //news
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((response) => response.json())
      .then((news) => setNews(news))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  //experts
  useEffect(() => {
    fetch("http://localhost:3000/expert")
      .then((response) => response.json())
      .then((news) => setExperts(news))
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div className="MainPage">
      <div className="top">
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

          <button className="btnThree">Biz haqimizda</button>
        </div>

        <div className="box">
          <p>Bizga qo‘shiling</p>
          <h1>
            Ro‘yxatdan o‘ting va o‘zingiz uchun yangi imkoniyatlar dunyosini
            oching, dunyo volontyorlari katta oilasining bir qismi bo‘ling
          </h1>

          <button className="btnThree">A’zo bo‘lish</button>
        </div>

        <div className="box">
          <p>Loyihalar</p>
          <h1>
            Loyihalarimiz ezgulikni volontyorlik orqali insonlarga ulashishga
            qaratilgan
          </h1>

          <button className="btnThree">Bizning loyihalar</button>
        </div>
      </div>

      <div className="two">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333008.992184648!2d59.30061593614458!3d40.939645982461634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sO%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1729090211634!5m2!1suz!2s"></iframe>

        <div className="three">
          {/* <p className="topVolontyor">Volontyorlar</p> */}

          <div>
            {/* <input className="search" type="text" placeholder="Volontyor qidiruvi..."/> */}

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
            <p>26,422</p>
            <p>Volontyorlar</p>
          </article>
        </div>

        <div className="box">
          <img className="icon" src={org} alt="" />
          <article>
            <p>61</p>
            <p>Tashkilotlar</p>
          </article>
        </div>

        <div className="box">
          <img className="icon" src={project} alt="" />
          <article>
            <p>31</p>
            <p>Loyihalar</p>
          </article>
        </div>
      </div>

      <div className="five">
        <div className="box">
          <article>
            <p>Volontyor bo‘lishni xohlaysizmi?</p>
            <p>
              Agar siz loyiha yoki tashkilotga yordam berishni istasangiz, bu
              yerga o‘ting
            </p>

            <button className="btnFour">Yordam berishni xohlayman</button>
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

            <button className="btnFour">
              <span></span>
              <p>Volontyorlarni topish</p>
            </button>
          </article>
          <img src={operator} alt="" />
        </div>
      </div>

      <div className="news">
        <h1 className="p">So‘nggi yangiliklar</h1>

        <div className="bottom">
          {news.map((news) => {
            return (
              <div className="box" key={news.id}>
                <div className="topNews">
                  <img src={news.img} alt="" />
                  <p className="name">{news.name}</p>
                </div>
                <h1 className="h1">{news.team}...</h1>
                <span>
                  <div className="date">
                    <img src={date} alt="" />
                    <h1>{news.date}</h1>
                  </div>

                  <div className="clock">
                    <img src={clock} alt="" />
                    <h1>{news.clock}</h1>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="experts">
        <h1 className="topInfo">Ezgulik elchilari va ekspertlar</h1>
        <div className="bottom">
          {
            experts.map((experts) => {
              return(
                <div key={experts.id} className="boxExpert">
                  <img className="expertImg" src={experts.img} alt="" />
                  <span>
                    <img src={openIcon} alt="" />
                    <h1>{experts.name}</h1>
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
