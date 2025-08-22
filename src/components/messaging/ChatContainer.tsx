import { cn } from "@/lib/utils";
import { Message, User } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface ChatContainerProps {
  campaign: {
    name: string;
    budget: string;
    status: "active" | "pending" | "completed";
    verified: boolean;
  };
  messages: Message[];
  currentUser: User;
  recipient: User;
}

const ChatContainer = ({
  campaign,
  messages,
  currentUser,
  recipient,
}: ChatContainerProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Header with Campaign Context */}
      <ChatHeader campaign={campaign} recipient={recipient} />

      {/* Message List */}
      <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-primary/5 to-muted/10">
        <MessageList messages={messages} currentUser={currentUser} />
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-border/30 bg-background">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;