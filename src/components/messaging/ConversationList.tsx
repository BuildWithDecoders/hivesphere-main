import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { Conversation } from "@/types";
import ConversationListItem from "./ConversationListItem";

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversationId: string | null;
  onSelectConversation: (id: string) => void;
}

const ConversationList = ({ conversations, selectedConversationId, onSelectConversation }: ConversationListProps) => {
  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {conversations.map((convo) => (
            <ConversationListItem
              key={convo.id}
              conversation={convo}
              isSelected={convo.id === selectedConversationId}
              onClick={() => onSelectConversation(convo.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ConversationList;