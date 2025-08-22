import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ChatHeaderProps {
  campaign: {
    name: string;
    budget: string;
    status: "active" | "pending" | "completed";
    verified: boolean;
  };
  recipient: {
    name: string;
    type: "brand" | "influencer";
    verified: boolean;
  };
}

const ChatHeader = ({ campaign, recipient }: ChatHeaderProps) => {
  return (
    <div className="border-b border-border/30 p-4 bg-card/80 backdrop-blur-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {campaign.name}
            {campaign.verified && (
              <CheckCircle className="h-4 w-4 text-green-500" />
            )}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="text-sm font-normal">
              {campaign.budget}
            </Badge>
            <Badge
              variant={
                campaign.status === "active"
                  ? "default"
                  : campaign.status === "pending"
                  ? "secondary"
                  : "outline"
              }
              className="text-sm"
            >
              {campaign.status}
            </Badge>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Chatting with: {recipient.name}
          {recipient.verified && (
            <CheckCircle className="h-3 w-3 text-green-500 inline ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;