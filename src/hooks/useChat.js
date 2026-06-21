import { useEffect, useState } from "react";

export function useChats() {
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("prime-ai-chats");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: Date.now(),
            title: "Новый чат",
            messages: []
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "prime-ai-chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  return {
    chats,
    setChats
  };
}