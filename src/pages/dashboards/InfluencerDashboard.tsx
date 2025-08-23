import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Briefcase, FileText, CheckCircle, Bell, DollarSign, Clock, Search, User } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const InfluencerDashboard = () => {
  useEffect(() => {
    document.title = "Dashboard — HiveSphere";
  }, []);

  const mockAvailableCampaigns = [
    { id: 1, name: "New Fashion Brand Launch", niche: "Fashion", budget: "₦50k–₦100k", deadline: "Apply by Dec 25" },
    { id: 2, name: "Eco-Friendly Water Bottle Promo", niche: "Lifestyle", budget: "₦30k–₦60k", deadline: "Apply by Dec 28" },
  ];

  const mockActiveCampaigns = [
    { id: 1, name: "Summer Skincare Essentials", deliverables: "2 Posts, 3 Stories", deadline: "3 days left", status: "Pending" },
  ];

  const mockPendingApps = [
    { id: 1, name: "Tech Gadget Review", status: "Awaiting Review" },
    { id: 2, name: "Local Restaurant Showcase", status: "Accepted" },
  ];
  
  const mockCompletedCampaigns = [
    { id: 1, name: "Fitness App Challenge" },
  ];

  const mockPayments = [
    { id: 1, campaign: "Summer Skincare Essentials", amount: "₦75,000", status: "Pending" },
    { id: 2, campaign: "Local Restaurant Showcase", amount: "₦45,000", status: "Paid" },
  ];

  const mockNotifications = [
    { id: 1, text: "You were invited to 'New Fashion Brand Launch'", time: "2h ago" },
    { id: 2, text: "Your application for 'Local Restaurant Showcase' was accepted!", time: "1 day ago" },
    { id: 3, text: "Reminder: Deliverables for 'Summer Skincare' are due in 3 days.", time: "2 days ago" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
      case "Awaiting Review":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case "Accepted":
      case "Paid":
        return <Badge variant="outline" className="text-green-600 border-green-600">{status}</Badge>;
      case "Rejected":
        return <Badge variant="destructive">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userRole="influencer">
      <main className="container py-6 space-y-6">
        {/* Header / Welcome Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-transparent">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Jane!</h1>
                <p className="text-muted-foreground">You have 2 new opportunities waiting for you.</p>
                <div className="flex items-center gap-2 mt-2">
                  <Progress value={75} className="w-32 h-2" />
                  <span className="text-xs text-muted-foreground">Profile 75% complete</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/dashboard/influencer/profile">
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard/influencer/campaigns">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Campaigns
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Campaigns</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Section 1: Campaign Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle>Available Campaigns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockAvailableCampaigns.map(campaign => (
                  <div key={campaign.id} className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <Badge variant="secondary">{campaign.niche}</Badge>
                        <span>{campaign.budget}</span>
                        <span>{campaign.deadline}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                ))}
                 <Button variant="outline" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Browse All Opportunities
                </Button>
              </CardContent>
            </Card>

            {/* Section 2: Your Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle>Your Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="active">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="pending">Pending Applications</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  <TabsContent value="active" className="pt-4 space-y-3">
                    {mockActiveCampaigns.map(campaign => (
                      <div key={campaign.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{campaign.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{campaign.deliverables}</p>
                            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {campaign.deadline}
                            </p>
                          </div>
                          {getStatusBadge(campaign.status)}
                        </div>
                        <Button size="sm" className="mt-3">Upload Deliverable</Button>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="pending" className="pt-4 space-y-3">
                    {mockPendingApps.map(app => (
                      <div key={app.id} className="p-4 border rounded-lg flex justify-between items-center">
                        <h3 className="font-semibold">{app.name}</h3>
                        {getStatusBadge(app.status)}
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="completed" className="pt-4 space-y-3">
                     {mockCompletedCampaigns.map(campaign => (
                      <div key={campaign.id} className="p-4 border rounded-lg flex justify-between items-center">
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <Link to="#"><Button size="sm" variant="outline">View Summary</Button></Link>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Section 4: Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockNotifications.map(notification => (
                  <div key={notification.id} className="p-3 border rounded-lg">
                    <p className="text-sm">{notification.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Section 3: Agreements & Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Agreements & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockPayments.map(payment => (
                  <div key={payment.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">{payment.campaign}</h4>
                        <p className="text-sm font-semibold text-primary">{payment.amount}</p>
                      </div>
                      {getStatusBadge(payment.status)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default InfluencerDashboard;