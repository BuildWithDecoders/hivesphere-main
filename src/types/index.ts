export interface User {
  id: string;
  name: string;
  type: "brand" | "influencer";
  verified: boolean;
  avatar?: string;
}

export interface Offer {
  budget: string;
  timeline: string;
  deliverables: string[];
  expiresIn: string;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: string;
  read: boolean;
  type: "text" | "offer" | "system";
  offer?: Offer;
}

export interface Conversation {
  id: string;
  recipient: User;
  lastMessage: {
    content: string;
    timestamp: string;
  };
  unreadCount: number;
  messages: Message[];
  campaign: {
    name: string;
    budget: string;
    status: "active" | "pending" | "completed";
    verified: boolean;
  };
}