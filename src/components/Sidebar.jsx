import { Plus, MessageSquare } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        Prime AI
      </div>

      <button className="new-chat">
        <Plus size={18}/>
        Новый чат
      </button>

      <div className="chat-list">

        <div className="chat-item active">
          <MessageSquare size={16}/>
          Первый чат
        </div>

        <div className="chat-item">
          <MessageSquare size={16}/>
          История
        </div>

      </div>

    </aside>
  );
}