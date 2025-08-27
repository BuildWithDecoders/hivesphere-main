import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Users, DollarSign, Eye, Heart, Download } from "lucide-react";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BrandAnalytics = () => {
  useEffect(() => {
    document.title = "Analytics — HiveSphere";
  }, []);

  const mockCampaignStats = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      reach: "125K",
      engagement: "8.5K",
      clicks: "2.1K",
      conversions: "156",
      roi: "320%",
      status: "active"
    },
    {
      id: 2,
      name: "Tech Product Launch",
      reach: "89K",
      engagement: "5.2K",
      clicks: "1.8K",
      conversions: "98",
      roi: "240%",
      status: "completed"
    }
  ];

  const chartData = [
    { name: 'Jan', reach: 4000, engagement: 2400 },
    { name: 'Feb', reach: 3000, engagement: 1398 },
    { name: 'Mar', reach: 2000, engagement: 9800 },
    { name: 'Apr', reach: 2780, engagement: 3908 },
    { name: 'May', reach: 1890, engagement: 4800 },
    { name: 'Jun', reach: 2390, engagement: 3800 },
  ];

  return (
    <DashboardLayout userRole="brand">
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Analytics & Insights</h1>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">214K</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13.7K</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">254</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -3% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">280%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-4">
            {mockCampaignStats.map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{campaign.name}</CardTitle>
                    <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                      {campaign.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">{campaign.reach}</p>
                      <p className="text-sm text-muted-foreground">Reach</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{campaign.engagement}</p>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{campaign.clicks}</p>
                      <p className="text-sm text-muted-foreground">Clicks</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{campaign.conversions}</p>
                      <p className="text-sm text-muted-foreground">Conversions</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{campaign.roi}</p>
                      <p className="text-sm text-muted-foreground">ROI</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="creators">
            <Card>
              <CardHeader><CardTitle>Creator Performance</CardTitle></CardHeader>
              <CardContent className="text-center py-8"><p className="text-muted-foreground">Creator analytics coming soon</p></CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demographics">
            <Card>
              <CardHeader><CardTitle>Audience Demographics</CardTitle></CardHeader>
              <CardContent className="text-center py-8"><p className="text-muted-foreground">Demographic insights coming soon</p></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </DashboardLayout>
  );
};

export default BrandAnalytics;