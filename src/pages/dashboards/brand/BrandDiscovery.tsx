import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Heart, Users, TrendingUp, Instagram, Youtube, Star, Mail } from "lucide-react";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BrandDiscovery = () => {
  useEffect(() => {
    document.title = "Creator Discovery — HiveSphere";
  }, []);

  const mockInfluencers = [
    {
      id: 1,
      name: "Jane Doe",
      handle: "@janedoe",
      avatar: "/placeholder.svg",
      niche: "Fashion & Lifestyle",
      location: "Lagos, Nigeria",
      followers: "12.5K",
      engagement: "6.2%",
      rating: 4.8,
      minRate: "₦25,000",
      verified: true,
      platforms: ["instagram", "youtube"]
    },
    {
      id: 2,
      name: "Tech Reviewer NG",
      handle: "@techreviewer_ng",
      avatar: "/placeholder.svg",
      niche: "Technology",
      location: "Abuja, Nigeria",
      followers: "45.2K",
      engagement: "4.8%",
      rating: 4.9,
      minRate: "₦75,000",
      verified: true,
      platforms: ["youtube", "instagram"]
    },
    {
      id: 3,
      name: "Foodie Adventures",
      handle: "@foodieadventures",
      avatar: "/placeholder.svg",
      niche: "Food & Travel",
      location: "Port Harcourt, Nigeria",
      followers: "8.9K",
      engagement: "7.1%",
      rating: 4.6,
      minRate: "₦15,000",
      verified: false,
      platforms: ["instagram"]
    }
  ];

  return (
    <DashboardLayout userRole="brand">
      <main className="container py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Creator Discovery</h1>
          <p className="text-muted-foreground">Find the perfect influencers for your next campaign.</p>
        </div>

        {/* Search & Filter Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, niche, or keyword..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger><SelectValue placeholder="Niche" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockInfluencers.map((influencer) => (
            <Card key={influencer.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={influencer.avatar} alt={influencer.name} />
                      <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{influencer.name}</h3>
                      <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8 flex-shrink-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{influencer.niche}</Badge>
                    <Badge variant="outline">{influencer.location}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm border-t border-b py-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{influencer.followers}</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{influencer.engagement}</p>
                        <p className="text-xs text-muted-foreground">Engagement</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4" />
                      <span className="text-sm font-medium text-foreground">{influencer.rating}</span>
                    </div>
                    <div className="text-sm font-medium">
                      From <span className="text-primary">{influencer.minRate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Creators</Button>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default BrandDiscovery;