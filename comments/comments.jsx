import { useState, useEffect } from "react";
import user from "../public/icon/people.png";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [notification, setNotification] = useState(false); // Bildirishni boshqarish uchun yangi state

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    setComments(storedComments || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const click = () => {
    if (comment !== "") {
      setComments((prev) => [...prev, comment]);
      setComment("");
      setNotification(true);

      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  };

  const change = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="bottom">
      <article>
        <textarea onChange={change} value={comment} maxLength={20}></textarea>
        <button className="sentButton" type="button" onClick={click}>
          junatish
        </button>
      </article>

      {notification && <p className="notification">Xabar junatildi</p>}

      <div className="two">
        <div className="sms">
          <div className="boxSms">
            <div className="left">
              <img
                src="https://volontyor.uz/media/experts/images/2024/01/Elyor-03.jpg"
                alt=""
              />
              <div>
                <p>ABDURAHMON</p>
                <h1>(Mamlakatimizga ancha foydasi tegadigan sayt ekan)</h1>
              </div>
            </div>
            <p className="right">1 kun oldin</p>
          </div>

          <div className="boxSms">
            <div className="left">
              <img
                src="https://volontyor.uz/media/experts/images/2024/01/Buxoro-03.jpg"
                alt=""
              />
              <div>
                <p>Ali 090</p>
                <h1>(Ajoyib, men ham volontyor bulmoqchiman)</h1>
              </div>
            </div>
            <p className="right">1 soat oldin</p>
          </div>

          {comments.map((sms, index) => (
            <div className="boxSms" key={index}>
              <div className="left">
                <img className="user" src={user} alt="" />
                <div>
                  <p>User-2721</p>
                  <h1>({sms})</h1>
                </div>
              </div>
              <p className="right">Hozirgina</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
