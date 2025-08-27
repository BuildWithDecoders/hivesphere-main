import { cn } from "@/lib/utils";
import { Message } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OfferCardProps {
  offer: Message;
  isCurrentUser: boolean;
}

const OfferCard = ({ offer, isCurrentUser }: OfferCardProps) => {
  return (
    <div className={cn(
      "w-full max-w-md p-4 rounded-2xl backdrop-blur-sm glass-bubble",
      isCurrentUser 
        ? "brand-bubble ml-auto" 
        : "system-bubble"
    )}>
      <h3 className="font-semibold mb-2">New Collaboration Offer</h3>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <p className="text-sm text-muted-foreground">Budget</p>
          <p className="font-medium">{offer.offer?.budget}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Timeline</p>
          <p className="font-medium">{offer.offer?.timeline}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <p className="text-sm text-muted-foreground">Deliverables</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {offer.offer?.deliverables.map((item, index) => (
            <Badge key={index} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </div>
      
      {!isCurrentUser && (
        <div className="flex gap-2 mt-4">
          <Button size="sm" className="flex-1">
            Accept
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Counter
          </Button>
          <Button size="sm" variant="outline">
            Decline
          </Button>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground mt-2">
        Offer expires in {offer.offer?.expiresIn}
      </div>
    </div>
  );
};

export default OfferCard;