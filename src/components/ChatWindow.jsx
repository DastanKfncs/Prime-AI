import { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import { askGemini } from "../services/gemini";

export default function ChatWindow() {

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Привет! Я Prime AI.",
      bot: true
    }
  ]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      text: input,
      bot: false
    };

    setMessages(prev => [...prev, userMessage]);

    const currentText = input;

    setInput("");

    setLoading(true);

    const answer = await askGemini(currentText);

    setMessages(prev => [
      ...prev,
      {
        text: answer,
        bot: true
      }
    ]);

    setLoading(false);
  };

  return (
    <main className="chat-window">

      <Header />

      <div className="messages">

        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            bot={msg.bot}
          />
        ))}

        {loading && (
          <div className="message bot">
            Prime AI печатает...
          </div>
        )}

      </div>

      <div className="input-wrapper">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Напишите сообщение..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          ➜
        </button>

      </div>

    </main>
  );
}