export default function Message({
  text,
  bot
}) {
  return (
    <div
      className={`message ${
        bot ? "bot" : "user"
      }`}
    >
      {text}
    </div>
  );
}