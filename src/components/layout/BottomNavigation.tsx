import { Home, Briefcase, DollarSign, MessageCircle, User, Search, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export type UserRole = "brand" | "influencer";

interface BottomNavigationProps {
  userRole: UserRole;
}

const BottomNavigation = ({ userRole }: BottomNavigationProps) => {
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
    { icon: BarChart3, label: "Analytics", path: "/dashboard/brand/analytics" },
    { icon: User, label: "Profile", path: "/dashboard/brand/profile" },
  ];

  const navItems = userRole === "influencer" ? influencerNavItems : brandNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
      <div className="container max-w-md mx-auto">
        <div className="flex items-center justify-around py-3">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 min-w-0 flex-1 relative",
                  isActive
                    ? "text-primary bg-primary/10 scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
                <Icon className={cn("h-5 w-5 mb-1 transition-transform duration-200", isActive && "scale-110")} />
                <span className={cn("text-xs font-medium truncate", isActive && "font-semibold")}>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;