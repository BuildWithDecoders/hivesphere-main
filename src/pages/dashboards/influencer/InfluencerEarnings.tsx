import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, TrendingUp, Clock, Download, Settings } from "lucide-react";
import { useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InfluencerEarnings = () => {
  useEffect(() => {
    document.title = "Earnings — HiveSphere";
  }, []);

  const mockEarnings = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      brand: "Fashion Nova",
      amount: "₦50,000",
      date: "Dec 10, 2024",
      status: "Paid",
    },
    {
      id: 2,
      campaign: "Tech Product Review",
      brand: "TechCorp Nigeria",
      amount: "₦75,000",
      date: "Dec 5, 2024",
      status: "Pending",
    },
    {
      id: 3,
      campaign: "Local Restaurant Showcase",
      brand: "Foodie Haven",
      amount: "₦45,000",
      date: "Nov 28, 2024",
      status: "Paid",
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">{status}</Badge>;
      case "Pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-300 bg-yellow-50">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userRole="influencer">
      <main className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Earnings</h1>
            <p className="text-muted-foreground">Track your payments and manage your payout settings.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Statement
            </Button>
            <Button size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Payout Settings
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available for Payout</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₦95,000</div>
              <p className="text-xs text-muted-foreground">From 2 completed campaigns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Clearance</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦75,000</div>
              <p className="text-xs text-muted-foreground">From 1 active campaign</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned (All Time)</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦170,000</div>
              <p className="text-xs text-muted-foreground">Across 3 campaigns</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockEarnings.map((earning) => (
                    <TableRow key={earning.id}>
                      <TableCell>
                        <div className="font-medium whitespace-nowrap">{earning.campaign}</div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">{earning.brand}</div>
                      </TableCell>
                      <TableCell className="font-medium whitespace-nowrap">{earning.amount}</TableCell>
                      <TableCell className="whitespace-nowrap">{earning.date}</TableCell>
                      <TableCell>{getStatusBadge(earning.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="whitespace-nowrap">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </DashboardLayout>
  );
};

export default InfluencerEarnings;