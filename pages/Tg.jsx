import { useState } from "react";

function App() {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [valueChat, setValuChat] = useState("7138666600");

  const handleInfo = (e) => {
    e.preventDefault();
    
    const nameRegex = /^[A-Za-z]+$/;
    
    if (!name) {
      alert("Iltimos, ism kiritin");
      return;
    }
    
    if (!nameRegex.test(name)) {
      alert("Ism faqat harflardan iborat bo'lishi kerak");
      return;
    }

    SendBotMessage();
  };

  const SendBotMessage = async () => {
    const botToken = "7373862301:AAEvToGITjx2IqTTMpYeg9PmgIiH6Zgax-w";
    const chatId = "";

    const telegramurl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const responseBot = await fetch(telegramurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId + valueChat,
          text: `Ism: ${name}\nXabar: ${info}`,
        }),
      });

      if (responseBot.ok) {
        alert("Xabar junatildi");
      } else {
        const errorText = await responseBot.text();
        console.log(`Xabar junatilmadi: ${errorText}`);
      }
    } catch (error) {
      alert(`Siz kiritgan matn junatilmadi: ${error}`);
    }
  };

  return (
    <div className="send">
      <form onSubmit={handleInfo}>
        <p>Adminga xabar yuborish</p>

        <input
          type="text"
          placeholder="Ismingizni kiriting..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <textarea
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          cols={70}
          rows={10}
          placeholder="Xabar matnini kiriting..."
        ></textarea>


        <input
          className="id"
          disabled
          onChange={(e) => setValuChat(e.target.value)}
          value={valueChat}
          type="number"
          placeholder="Telegram ID kiriting ..."
        />



        <button>Junatish</button>
      </form>
    </div>
  );
}

export default App;
