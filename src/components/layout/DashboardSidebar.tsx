import { Home, Briefcase, DollarSign, MessageCircle, User, Search, BarChart3, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { UserRole } from "./BottomNavigation";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DashboardSidebarProps {
  userRole: UserRole;
  isCollapsed: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ userRole, isCollapsed, onToggle }: DashboardSidebarProps) => {
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
    <TooltipProvider>
      <aside className={cn(
        "w-64 flex-shrink-0 border-r bg-card p-4 hidden md:flex flex-col transition-[width] duration-300",
        isCollapsed && "w-20 p-2"
      )}>
        <div className={cn(
          "flex items-center gap-2 mb-8 px-3",
          isCollapsed && "px-0 justify-center"
        )}>
          <img 
            src="/lovable-uploads/cdd54ec3-f5f9-41e6-b0a3-6bb6ec87bb79.png" 
            alt="HiveSphere logo" 
            className={cn("h-8 w-auto opacity-90 transition-all", isCollapsed && "h-8 w-8 object-contain")} 
          />
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Tooltip key={path} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={path}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/5",
                      isActive && "bg-primary/10 text-primary font-semibold",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className={cn("transition-opacity whitespace-nowrap", isCollapsed && "opacity-0 hidden")}>{label}</span>
                  </Link>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right" className="bg-card text-foreground">
                    <p>{label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </nav>
        <div className="mt-auto pt-4 border-t border-border/50">
          <Button 
            onClick={onToggle} 
            variant="ghost" 
            size="icon" 
            className="w-full h-10"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform duration-300", isCollapsed && "rotate-180")} />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default DashboardSidebar;