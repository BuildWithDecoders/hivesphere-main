import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Bell, DollarSign, Users, TrendingUp, User, Search, CheckCircle, FileText, Clock } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

const BrandDashboard = () => {
  useEffect(()=>{document.title = "Brand Dashboard — HiveSphere"},[]);

  // --- Mock Data based on MVP ---
  const brandName = "Fashion Nova Nigeria"; // Example brand name

  const quickStats = {
    activeCampaigns: 3,
    pendingApprovals: 2,
    completedCampaigns: 4,
    totalInfluencersOnboarded: 12,
  };

  const mockActiveCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      influencers: [
        { id: 'inf1', name: 'Jane Doe', status: 'Delivered', progress: 100 },
        { id: 'inf2', name: 'Fashionista', status: 'Pending', progress: 50 },
        { id: 'inf3', name: 'Style Guru', status: 'Invited', progress: 0 },
      ],
      progress: 60, // Overall campaign progress
      deadline: "5 days left",
    },
    {
      id: 2,
      title: "Winter Skincare Launch",
      influencers: [
        { id: 'inf4', name: 'Beauty Blogger', status: 'Delivered', progress: 100 },
        { id: 'inf5', name: 'Skin Expert', status: 'Pending', progress: 0 },
      ],
      progress: 50,
      deadline: "10 days left",
    }
  ];

  const mockPendingCampaigns = [
    {
      id: 3,
      title: "New Tech Gadget",
      invitesSent: 5,
      accepted: 2,
      awaiting: 3,
      deadline: "7 days left",
    },
  ];

  const mockCompletedCampaigns = [
    {
      id: 4,
      title: "Holiday Sales Boost",
      totalInfluencers: 10,
      postsDelivered: 10,
      engagement: "15K",
      roi: "320%",
    },
  ];

  const mockInfluencers = [
    {
      id: 1,
      name: "Jane Doe",
      handle: "@janedoe",
      avatar: "/placeholder.svg",
      niche: "Fashion & Lifestyle",
      followers: "12.5K",
      engagement: "6.2%",
    },
    {
      id: 2,
      name: "Tech Reviewer NG",
      handle: "@techreviewer_ng",
      avatar: "/placeholder.svg",
      niche: "Technology",
      followers: "45.2K",
      engagement: "4.8%",
    },
  ];

  const mockAgreements = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      totalBudget: "₦200,000",
      paid: "₦150,000",
      pending: "₦50,000",
      status: "Partial Paid",
    },
    {
      id: 2,
      campaign: "New Tech Gadget",
      totalBudget: "₦100,000",
      paid: "₦0",
      pending: "₦100,000",
      status: "Pending",
    },
  ];

  const mockNotifications = [
    {
      id: 1,
      message: "Jane Doe accepted your invite for Summer Fashion Collection.",
      time: "1 hour ago",
      type: "application"
    },
    {
      id: 2,
      message: "New deliverable uploaded for Winter Skincare Launch.",
      time: "3 hours ago",
      type: "deliverable"
    },
    {
      id: 3,
      message: "Payment processed for Holiday Sales Boost.",
      time: "1 day ago",
      type: "payment"
    }
  ];

  return (
    <DashboardLayout userRole="brand">
      <main className="container py-6 space-y-6">
        {/* Header / Welcome Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt={brandName} />
                <AvatarFallback>{brandName.split(' ').map(n => n[0]).join('').substring(0,2)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {brandName}!</h1>
                <p className="text-muted-foreground">You have {quickStats.activeCampaigns} active campaigns and {quickStats.pendingApprovals} pending approvals.</p>
                <div className="flex items-center gap-2 mt-2">
                  <Progress value={85} className="w-32 h-2" />
                  <span className="text-xs text-muted-foreground">Profile 85% complete</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/dashboard/brand/profile">
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
              <Button asChild>
                <Link to="/campaigns/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{quickStats.activeCampaigns}</div>
              <p className="text-sm text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-yellow-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{quickStats.pendingApprovals}</div>
              <p className="text-sm text-muted-foreground">Awaiting influencer response</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Campaigns</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{quickStats.completedCampaigns}</div>
              <p className="text-sm text-muted-foreground">Successfully finished</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Influencers Onboarded</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{quickStats.totalInfluencersOnboarded}</div>
              <p className="text-sm text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Section 2: Manage Campaigns */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Manage Campaigns</CardTitle>
                <Link to="/dashboard/brand/campaigns">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="pt-4 space-y-4">
                  {mockActiveCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-semibold mb-2">{campaign.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>Overall Progress:</span>
                        <span className="font-medium">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2 mb-3" />
                      <div className="space-y-2">
                        {campaign.influencers.map(inf => (
                          <div key={inf.id} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                              {inf.status === 'Delivered' ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Clock className="h-4 w-4 text-yellow-600" />}
                              {inf.name}
                            </span>
                            <Badge variant="secondary">{inf.status}</Badge>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">Invite More</Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                  {mockActiveCampaigns.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">No active campaigns.</div>
                  )}
                </TabsContent>
                <TabsContent value="pending" className="pt-4 space-y-4">
                  {mockPendingCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-semibold mb-2">{campaign.title}</h3>
                      <div className="text-sm text-muted-foreground mb-3">
                        {campaign.accepted} accepted, {campaign.awaiting} awaiting response from {campaign.invitesSent} invites.
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Send Reminder</Button>
                        <Button size="sm" variant="destructive">Cancel Campaign</Button>
                      </div>
                    </div>
                  ))}
                  {mockPendingCampaigns.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">No pending campaigns.</div>
                  )}
                </TabsContent>
                <TabsContent value="completed" className="pt-4 space-y-4">
                  {mockCompletedCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-semibold mb-2">{campaign.title}</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <span>Influencers: <span className="font-medium">{campaign.totalInfluencers}</span></span>
                        <span>Posts: <span className="font-medium">{campaign.postsDelivered}</span></span>
                        <span>Engagement: <span className="font-medium">{campaign.engagement}</span></span>
                        <span>ROI: <span className="font-medium text-green-600">{campaign.roi}</span></span>
                      </div>
                      <Button size="sm" variant="outline" className="mt-4">View Report</Button>
                    </div>
                  ))}
                  {mockCompletedCampaigns.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">No completed campaigns.</div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Section 5: Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
                <Badge variant="secondary">{mockNotifications.length}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="p-3 border rounded-lg">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Influencer Directory */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Find Influencers</CardTitle>
              <Link to="/dashboard/brand/discovery">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search creators by name, niche, or location..."
                className="pl-10"
              />
            </div>
            <div className="space-y-4">
              {mockInfluencers.map((influencer) => (
                <div key={influencer.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={influencer.avatar} alt={influencer.name} />
                      <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{influencer.name}</h3>
                      <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                      <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                        <span>{influencer.followers} followers</span>
                        <span>{influencer.engagement} engagement</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Invite to Campaign</Button>
                    <Button size="sm" variant="outline">View Profile</Button>
                  </div>
                </div>
              ))}
              {mockInfluencers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No influencers found.</div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Agreements & Payments */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Agreements & Payments</CardTitle>
              <Link to="/dashboard/brand/profile"> {/* Assuming payment settings are in profile */}
                <Button variant="outline" size="sm">Manage Payouts</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAgreements.map((agreement) => (
                <div key={agreement.id} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{agreement.campaign}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Budget</p>
                      <p className="font-medium">{agreement.totalBudget}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Paid</p>
                      <p className="font-medium text-green-600">{agreement.paid}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pending</p>
                      <p className="font-medium text-yellow-600">{agreement.pending}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <Badge variant="secondary">{agreement.status}</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="mt-4">View Agreement</Button>
                </div>
              ))}
              {mockAgreements.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No agreements or payments yet.</div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </DashboardLayout>
  );
};

export default BrandDashboard;