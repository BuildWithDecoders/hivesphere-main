import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, DollarSign, Search, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InfluencerCampaigns = () => {
  useEffect(() => {
    document.title = "Campaigns — HiveSphere";
  }, []);

  const mockCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      brand: "Fashion Nova",
      budget: "₦50,000",
      deadline: "5 days left",
      status: "applied",
      deliverables: "2 Posts + 3 Stories"
    },
    {
      id: 2,
      title: "Tech Product Launch",
      brand: "TechCorp Nigeria",
      budget: "₦75,000",
      deadline: "3 days left",
      status: "active",
      deliverables: "1 Video Review"
    },
    {
      id: 3,
      title: "Local Restaurant Showcase",
      brand: "Foodie Haven",
      budget: "₦45,000",
      deadline: "Completed",
      status: "completed",
      deliverables: "1 Reel, 2 Stories"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "active": return "bg-green-100 text-green-800 border-green-300";
      case "completed": return "bg-blue-100 text-blue-800 border-blue-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const CampaignCard = ({ campaign }: { campaign: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{campaign.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{campaign.brand}</p>
          </div>
          <Badge variant="outline" className={getStatusColor(campaign.status)}>
            {campaign.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 border-t pt-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Budget</p>
              <p className="text-sm font-medium">{campaign.budget}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Deadline</p>
              <p className="text-sm font-medium">{campaign.deadline}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Deliverables:</p>
          <p className="text-sm font-medium">{campaign.deliverables}</p>
        </div>
        <div className="flex gap-2 border-t pt-4">
          <Button size="sm" className="flex-1">
            {campaign.status === "applied" ? "View Application" : "View Details"}
          </Button>
          {campaign.status === "active" && (
            <Button size="sm" variant="outline" className="flex-1">Submit Deliverable</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const EmptyState = ({ title, description }: { title: string, description: string }) => (
    <div className="text-center py-12">
      <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Button asChild size="sm" className="mt-4">
        <Link to="/dashboard/influencer">Browse Opportunities</Link>
      </Button>
    </div>
  );

  return (
    <DashboardLayout userRole="influencer">
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">My Campaigns</h1>
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search campaigns..." className="pl-10" />
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </TabsContent>

          <TabsContent value="active">
            <EmptyState title="No Active Campaigns" description="Once a brand accepts your application, your campaign will appear here." />
          </TabsContent>

          <TabsContent value="applied">
             <EmptyState title="No Pending Applications" description="Apply to campaigns and track your application status here." />
          </TabsContent>

          <TabsContent value="completed">
            <EmptyState title="No Completed Campaigns" description="Finished campaigns will be archived here for your records." />
          </TabsContent>
        </Tabs>
      </main>
    </DashboardLayout>
  );
};

export default InfluencerCampaigns;