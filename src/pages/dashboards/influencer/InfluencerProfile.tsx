import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Edit, Star, Users, TrendingUp, Instagram, Youtube, Twitter, DollarSign, Briefcase, Upload } from "lucide-react";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InfluencerProfile = () => {
  useEffect(() => {
    document.title = "Profile — HiveSphere";
  }, []);

  const keyStats = [
    { icon: Users, label: "Followers", value: "12.5K", change: "+500 this week" },
    { icon: TrendingUp, label: "Engagement", value: "6.2%", change: "Above Average" },
    { icon: DollarSign, label: "Total Earned", value: "₦80K", change: "+25% this month" },
    { icon: Briefcase, label: "Campaigns", value: "15", change: "2 Active" },
  ];

  return (
    <DashboardLayout userRole="influencer">
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <Button size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=96&h=96&fit=crop&crop=face" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">Jane Doe</h2>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Lifestyle & Fashion Content Creator | Lagos, Nigeria
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                        <Instagram className="h-4 w-4" /> @janedoe
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                        <Youtube className="h-4 w-4" /> Jane Doe
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                        <Twitter className="h-4 w-4" /> @jane_doe
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About & Niches */}
            <Card>
              <CardHeader><CardTitle>About Me</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Passionate about sustainable fashion and showcasing the best of Nigerian lifestyle. I love creating authentic, engaging content that resonates with my audience and drives real results for brands.
                </p>
                <h4 className="font-semibold mb-2">Niches & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Fashion</Badge>
                  <Badge variant="secondary">Lifestyle</Badge>
                  <Badge variant="secondary">Beauty</Badge>
                  <Badge variant="secondary">Travel</Badge>
                  <Badge variant="outline">Content Creation</Badge>
                  <Badge variant="outline">Video Editing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Stats */}
            <Card>
              <CardHeader><CardTitle>Key Stats</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-medium text-muted-foreground">{stat.label}</h4>
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-green-600">{stat.change}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Completeness */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Completeness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">85% Complete</span>
                  <Button size="sm" variant="outline">Complete Profile</Button>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Add more portfolio items and verify your social accounts to improve your profile.
                </p>
              </CardContent>
            </Card>

            {/* Recent Portfolio */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Work</CardTitle>
                  <Button size="sm" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Add Work
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-muted rounded-lg overflow-hidden group relative">
                      <img src={`https://picsum.photos/seed/${item+10}/200`} alt={`Portfolio item ${item}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white text-sm font-medium">View Work</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default InfluencerProfile;