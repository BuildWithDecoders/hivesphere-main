import { Home, Briefcase, DollarSign, MessageCircle, User, Search, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type UserRole = "brand" | "influencer";

interface DashboardNavProps {
  userRole: UserRole;
  isCollapsed: boolean;
  isMobile?: boolean;
}

export const DashboardNav = ({ userRole, isCollapsed, isMobile = false }: DashboardNavProps) => {
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

  const navContent = (
    <nav className="flex flex-col gap-2">
      {navItems.map(({ icon: Icon, label, path }) => {
        const isActive = location.pathname === path;
        const linkContent = (
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
        );

        if (isCollapsed && !isMobile) {
          return (
            <Tooltip key={path} delayDuration={0}>
              <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
              <TooltipContent side="right" className="bg-card text-foreground">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        }
        return linkContent;
      })}
    </nav>
  );

  if (isCollapsed && !isMobile) {
    return <TooltipProvider>{navContent}</TooltipProvider>;
  }

  return navContent;
};