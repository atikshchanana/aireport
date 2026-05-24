import { useState } from "react";

export default function Chatbox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer },
      ]);

    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900 p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        AI Report Chatbot 💬
      </h2>

      {/* CHAT BOX */}
      <div className="h-96 overflow-y-auto bg-black p-4 rounded-lg mb-4 border border-slate-700">

        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <span className="font-bold text-cyan-400">
              {msg.role === "user" ? "You" : "AI"}:
            </span>{" "}
            <span className="text-white">{msg.text}</span>
          </div>
        ))}

      </div>

      {/* INPUT */}
      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your report..."
          className="flex-1 p-3 rounded-lg bg-slate-800 text-white outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-bold"
        >
          Send
        </button>

      </div>

    </div>
  );
}