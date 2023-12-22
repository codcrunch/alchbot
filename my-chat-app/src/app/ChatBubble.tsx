// ChatBubble.tsx
interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;
