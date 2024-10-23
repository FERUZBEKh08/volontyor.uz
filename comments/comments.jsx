import { useState, useEffect } from "react";
import user from "../public/icon/people.png";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Local storage dan comments ni o'qish
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    setComments(storedComments);
  }, []);

  // Comments ni local storage ga saqlash
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const click = () => {
    if (comment !== "") {
      setComments((e) => [...e, comment]);
      setComment(""); // Yangi sharh qo'shilgandan so'ng textarea ni tozalash
      
    }
  };

  const change = (e) => {
    setComment(e.target.value);
    localStorage.clear()
  };

  return (
    <div className="bottom">
      <article>
        <textarea onChange={change} value={comment} maxLength={25}></textarea>
        <button className="sentButton" type="button" onClick={click}>
          junaish
        </button>
      </article>

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
                <h1>(Mamakatimizga ancha foydasi tigadigan sayt ekan)</h1>
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
                <h1>(Ajoyib man ham volontyor bulmoqchiman)</h1>
              </div>
            </div>
            <p className="right">1 soat oldin</p>
          </div>

          {comments.map((sms, index) => (
            <div className="boxSms" key={index}>
              <div className="left">
                <img className="user" src={user} alt="" />
                <div>
                  <p>Siz</p>
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
