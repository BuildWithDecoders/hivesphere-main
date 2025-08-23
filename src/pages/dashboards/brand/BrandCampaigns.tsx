import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Users, DollarSign, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import DashboardHeader from "@/components/layout/DashboardHeader";

const BrandCampaigns = () => {
  useEffect(() => {
    document.title = "Campaigns — HiveSphere";
  }, []);

  const mockCampaigns = [
    {
      id: 1,
      title: "Summer Fashion Collection",
      status: "active",
      budget: "200,000",
      applicants: 12,
      influencers: [
        { name: "Jane Doe", avatar: "/placeholder.svg" },
        { name: "John Smith", avatar: "/placeholder.svg" },
      ],
      progress: 65,
      description: "Promote our new summer collection targeting young professionals."
    },
    {
      id: 2,
      title: "Tech Product Launch",
      status: "draft",
      budget: "150,000",
      applicants: 0,
      influencers: [],
      progress: 0,
      description: "Unboxing and review of our latest smartphone model."
    },
    {
      id: 3,
      title: "Holiday Skincare Special",
      status: "completed",
      budget: "300,000",
      applicants: 25,
      influencers: [
        { name: "Beauty Guru", avatar: "/placeholder.svg" },
        { name: "Skin Expert", avatar: "/placeholder.svg" },
        { name: "Lifestyle Influencer", avatar: "/placeholder.svg" },
      ],
      progress: 100,
      description: "Showcasing our holiday gift sets for the festive season."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-300";
      case "draft": return "bg-gray-100 text-gray-800 border-gray-300";
      case "completed": return "bg-blue-100 text-blue-800 border-blue-300";
      case "paused": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const EmptyState = () => (
    <div className="text-center py-16 border-2 border-dashed rounded-lg">
      <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">No Campaigns Here</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Create a new campaign to start collaborating with influencers.
      </p>
      <Button asChild size="sm" className="mt-4">
        <Link to="/campaigns/new">Create Campaign</Link>
      </Button>
    </div>
  );

  return (
    <DashboardLayout userRole="brand">
      <main className="container py-6 space-y-6">
        <DashboardHeader
          title="My Campaigns"
          description="Manage, track, and create all your influencer campaigns."
        >
          <Link to="/campaigns/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </Link>
        </DashboardHeader>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="paused">Paused</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {mockCampaigns.length > 0 ? mockCampaigns.map((campaign) => (
              <Card key={campaign.id} className="dashboard-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{campaign.title}</CardTitle>
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {campaign.description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button size="sm" variant="outline">
                        {campaign.status === "draft" ? "Edit" : "Manage"}
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                  
                  <div className="border-t my-4"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>Budget: <span className="font-medium">₦{parseInt(campaign.budget).toLocaleString()}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{campaign.applicants} Applicants</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <TooltipProvider>
                        <div className="flex -space-x-2">
                          {campaign.influencers.slice(0, 3).map((inf, i) => (
                            <Tooltip key={i}>
                              <TooltipTrigger>
                                <Avatar className="h-8 w-8 border-2 border-card">
                                  <AvatarImage src={inf.avatar} />
                                  <AvatarFallback>{inf.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent>{inf.name}</TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                        {campaign.influencers.length > 3 && (
                          <span className="text-xs text-muted-foreground ml-3">
                            +{campaign.influencers.length - 3} more
                          </span>
                        )}
                      </TooltipProvider>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) : <EmptyState />}
          </TabsContent>

          <TabsContent value="active"><EmptyState /></TabsContent>
          <TabsContent value="draft"><EmptyState /></TabsContent>
          <TabsContent value="completed"><EmptyState /></TabsContent>
          <TabsContent value="paused"><EmptyState /></TabsContent>
        </Tabs>
      </main>
    </DashboardLayout>
  );
};

export default BrandCampaigns;