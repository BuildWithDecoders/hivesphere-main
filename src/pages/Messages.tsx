import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ChatContainer from "@/components/messaging/ChatContainer";
import { Message, User } from "@/types";

const Messages = () => {
  const [currentChat, setCurrentChat] = useState<string>("1");

  // Mock data
  const currentUser: User = {
    id: "user-1",
    name: "My Brand",
    type: "brand",
    verified: true,
  };

  const recipient: User = {
    id: "user-2",
    name: "Influencer Pro",
    type: "influencer",
    verified: true,
  };

  const campaign = {
    name: "Summer Collection Launch",
    budget: "₦200,000",
    status: "active" as const,
    verified: true,
  };

  const messages: Message[] = [
    {
      id: "1",
      content: "Hi there! I'm interested in collaborating on your summer collection.",
      sender: recipient,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      read: true,
      type: "text",
    },
    {
      id: "2",
      content: "Great! What kind of collaboration are you thinking about?",
      sender: currentUser,
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      read: true,
      type: "text",
    },
    {
      id: "3",
      content: "",
      sender: recipient,
      timestamp: new Date(Date.now() - 900000).toISOString(),
      read: true,
      type: "offer",
      offer: {
        budget: "₦50,000",
        timeline: "2 weeks",
        deliverables: ["2 Instagram posts", "3 Stories", "1 Reel"],
        expiresIn: "48 hours",
      },
    },
  ];

  return (
    <div className="container py-6">
      <Card className="h-[calc(100vh-140px)]">
        <CardContent className="h-full p-0">
          <ChatContainer
            campaign={campaign}
            messages={messages}
            currentUser={currentUser}
            recipient={recipient}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Messages;