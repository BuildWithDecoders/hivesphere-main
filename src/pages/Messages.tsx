import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ChatContainer from "@/components/messaging/ChatContainer";
import ConversationList from "@/components/messaging/ConversationList";
import { Conversation, User } from "@/types";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

// Mock Data
const currentUserBrand: User = { id: "brand-1", name: "Fashion Nova", type: "brand", verified: true, avatar: "https://i.pravatar.cc/150?u=brand-1" };
const currentUserInfluencer: User = { id: "influencer-1", name: "Jane Doe", type: "influencer", verified: true, avatar: "https://i.pravatar.cc/150?u=influencer-1" };

const mockConversations: Conversation[] = [
  {
    id: "convo-1",
    recipient: { id: "influencer-2", name: "Chioma Okeke", type: "influencer", verified: true, avatar: "https://i.pravatar.cc/150?u=influencer-2" },
    lastMessage: { content: "Sounds great! I'll send over the contract.", timestamp: "10:42 AM" },
    unreadCount: 0,
    campaign: { name: "Summer Collection", budget: "₦200,000", status: "active", verified: true },
    messages: [
      { id: "msg-1", content: "Hey Chioma, we loved your profile!", sender: currentUserBrand, timestamp: "2023-10-27T10:40:00Z", read: true, type: "text" },
      { id: "msg-2", content: "Thanks! I'd love to work with you.", sender: { id: "influencer-2", name: "Chioma Okeke", type: "influencer", verified: true }, timestamp: "2023-10-27T10:41:00Z", read: true, type: "text" },
      { id: "msg-3", content: "Sounds great! I'll send over the contract.", sender: currentUserBrand, timestamp: "2023-10-27T10:42:00Z", read: false, type: "text" },
    ],
  },
  {
    id: "convo-2",
    recipient: { id: "brand-2", name: "TechCorp NG", type: "brand", verified: true, avatar: "https://i.pravatar.cc/150?u=brand-2" },
    lastMessage: { content: "Here is my proposal for the campaign.", timestamp: "Yesterday" },
    unreadCount: 2,
    campaign: { name: "New Gadget Launch", budget: "₦150,000", status: "pending", verified: true },
    messages: [
        { id: "msg-4", content: "Here is my proposal for the campaign.", sender: currentUserInfluencer, timestamp: "2023-10-26T15:20:00Z", read: false, type: "text" },
    ],
  },
];

const Messages = () => {
  const location = useLocation();
  const userRole = location.pathname.includes("brand") ? "brand" : "influencer";
  const currentUser = userRole === 'brand' ? currentUserBrand : currentUserInfluencer;

  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(mockConversations[0]?.id || null);

  const selectedConversation = mockConversations.find(c => c.id === selectedConversationId);

  return (
    <DashboardLayout userRole={userRole}>
      <div className="h-full">
        <Card className="h-full rounded-none md:rounded-lg border-0 md:border">
          <CardContent className="h-full p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
              {/* Conversation List (hidden on mobile when a chat is open) */}
              <div className={cn("col-span-1 h-full", selectedConversationId && "hidden md:block")}>
                <ConversationList
                  conversations={mockConversations}
                  selectedConversationId={selectedConversationId}
                  onSelectConversation={(id) => setSelectedConversationId(id)}
                />
              </div>

              {/* Chat View */}
              <div className={cn("md:col-span-2 lg:col-span-3 h-full", !selectedConversationId && "hidden md:block")}>
                {selectedConversation ? (
                  <div className="relative h-full">
                    {/* Back button for mobile */}
                    <button onClick={() => setSelectedConversationId(null)} className="md:hidden absolute top-4 left-4 z-10 bg-background p-2 rounded-full shadow">
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <ChatContainer
                      campaign={selectedConversation.campaign}
                      messages={selectedConversation.messages}
                      currentUser={currentUser}
                      recipient={selectedConversation.recipient}
                    />
                  </div>
                ) : (
                  <div className="hidden md:flex h-full items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <h2 className="text-xl font-medium">Select a conversation</h2>
                      <p className="text-muted-foreground">Choose from your existing conversations to start chatting.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Messages;