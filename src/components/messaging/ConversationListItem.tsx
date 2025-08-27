import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Conversation } from "@/types";

interface ConversationListItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationListItem = ({ conversation, isSelected, onClick }: ConversationListItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
        isSelected ? "bg-primary/10" : "hover:bg-muted/50"
      )}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage src={conversation.recipient.avatar} alt={conversation.recipient.name} />
        <AvatarFallback>{conversation.recipient.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold truncate">{conversation.recipient.name}</h3>
          <p className="text-xs text-muted-foreground flex-shrink-0">{conversation.lastMessage.timestamp}</p>
        </div>
        <div className="flex justify-between items-start">
          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage.content}</p>
          {conversation.unreadCount > 0 && (
            <Badge className="h-5 w-5 flex items-center justify-center p-0">{conversation.unreadCount}</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationListItem;