import { cn } from "@/lib/utils";
import { Message, User } from "@/types";
import MessageBubble from "./MessageBubble";
import OfferCard from "./OfferCard";

interface MessageListProps {
  messages: Message[];
  currentUser: User;
}

const MessageList = ({ messages, currentUser }: MessageListProps) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex",
            message.sender.id === currentUser.id ? "justify-end" : "justify-start"
          )}
        >
          {message.type === "text" ? (
            <MessageBubble message={message} isCurrentUser={message.sender.id === currentUser.id} />
          ) : message.type === "offer" ? (
            <OfferCard offer={message} isCurrentUser={message.sender.id === currentUser.id} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MessageList;