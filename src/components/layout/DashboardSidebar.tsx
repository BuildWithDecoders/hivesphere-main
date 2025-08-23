import { Home, Briefcase, DollarSign, MessageCircle, User, Search, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { UserRole } from "./BottomNavigation";

interface DashboardSidebarProps {
  userRole: UserRole;
}

const DashboardSidebar = ({ userRole }: DashboardSidebarProps) => {
  const location = useLocation();

  const influencerNavItems = [
    { icon: Home, label: "Home", path: "/dashboard/influencer" },
    { icon: Briefcase, label: "Campaigns", path: "/dashboard/influencer/campaigns" },
    { icon: DollarSign, label: "Earnings", path: "/dashboard/influencer/earnings" },
    { icon: MessageCircle, label: "Messages", path: "/dashboard/influencer/messages" },
    { icon: User, label: "Profile", path: "/dashboard/influencer/profile" },
  ];

  const brandNavItems = [
    { icon: Home, label: "Home", path: "/dashboard/brand" },
    { icon: Briefcase, label: "Campaigns", path: "/dashboard/brand/campaigns" },
    { icon: Search, label: "Discovery", path: "/dashboard/brand/discovery" },
    { icon: MessageCircle, label: "Messages", path: "/dashboard/brand/messages" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/brand/analytics" },
    { icon: User, label: "Profile", path: "/dashboard/brand/profile" },
  ];

  const navItems = userRole === "influencer" ? influencerNavItems : brandNavItems;

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-card p-4 hidden md:flex flex-col">
      <div className="flex items-center gap-2 mb-8 px-3">
        <img src="/lovable-uploads/cdd54ec3-f5f9-41e6-b0a3-6bb6ec87bb79.png" alt="HiveSphere logo" className="h-8 w-auto opacity-90" />
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/5",
                isActive && "bg-primary/10 text-primary font-semibold"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;