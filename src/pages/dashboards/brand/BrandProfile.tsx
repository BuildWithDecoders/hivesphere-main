import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, CreditCard, Bell, Shield, Globe, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import DashboardHeader from "@/components/layout/DashboardHeader";

const BrandProfile = () => {
  useEffect(() => {
    document.title = "Brand Profile — HiveSphere";
  }, []);

  return (
    <DashboardLayout userRole="brand">
      <main className="container py-6 space-y-6">
        <DashboardHeader
          title="Brand Profile"
          description="Manage your public profile, settings, and billing information."
        >
          <Button size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </DashboardHeader>

        <Card className="dashboard-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="Brand Logo" />
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">Fashion Nova Nigeria</h2>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Verified Business
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Premium Fashion Brand | Lagos, Nigeria
                </p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                  <a href="#" className="flex items-center gap-2 hover:text-primary"><Globe className="h-4 w-4" />fashionnova.ng</a>
                  <a href="#" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />hello@fashionnova.ng</a>
                  <span className="flex items-center gap-2"><Phone className="h-4 w-4" />+234 812 345 6789</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t pt-4">
                  <div className="text-center">
                    <p className="text-xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Collaborations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">4.9 ★</p>
                    <p className="text-sm text-muted-foreground">Brand Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="settings" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="space-y-4">
            <Card className="dashboard-card">
              <CardHeader><CardTitle>Brand Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><Label>Company Name</Label><p className="text-muted-foreground">Fashion Nova Nigeria</p></div>
                  <div><Label>Industry</Label><p className="text-muted-foreground">Fashion & Lifestyle</p></div>
                  <div><Label>Location</Label><p className="text-muted-foreground">Lagos, Nigeria</p></div>
                  <div><Label>Company Size</Label><p className="text-muted-foreground">51-200 employees</p></div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card className="dashboard-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Billing & Payments</CardTitle>
                  <Button size="sm"><CreditCard className="h-4 w-4 mr-2" />Add Payment Method</Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Current Plan</h3>
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <p className="font-medium">Professional Plan</p>
                      <p className="text-sm text-muted-foreground">₦50,000/month</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Payment Methods</h3>
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/26</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5" />Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: "apps", label: "New campaign applications", desc: "Get notified when an influencer applies to your campaign." },
                  { id: "miles", label: "Campaign milestones reached", desc: "Receive updates on campaign progress." },
                  { id: "pay", label: "Payment confirmations", desc: "Confirmations for payments made." },
                  { id: "reports", label: "Weekly performance reports", desc: "A summary of your campaign analytics." },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <Label htmlFor={item.id} className="font-medium">{item.label}</Label>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch id={item.id} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="dashboard-card">
              <CardHeader><CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" />Security Settings</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <Button size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-muted-foreground">Last changed 3 months ago.</p>
                  </div>
                  <Button size="sm" variant="outline">Change</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </DashboardLayout>
  );
};

export default BrandProfile;