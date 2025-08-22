import { cn } from "@/lib/utils";
import { Message } from "@/types";
import { Check, Clock } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

const MessageBubble = ({ message, isCurrentUser }: MessageBubbleProps) => {
  return (
    <div className="max-w-[80%]">
      <div
        className={cn(
          "p-4 rounded-2xl backdrop-blur-sm",
          isCurrentUser
            ? "bg-primary/10 border border-primary/20" // Brand message (Coral)
            : "bg-green-500/10 border border-green-500/20" // Influencer message (Evergreen)
        )}
      >
        <p className="text-foreground">{message.content}</p>
      </div>
      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
        {new Date(message.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        {message.read ? (
          <Check className="h-3 w-3 text-primary" />
        ) : (
          <Clock className="h-3 w-3 text-muted-foreground" />
        )}
      </div>
    </div>
  );
};

export default MessageBubble;