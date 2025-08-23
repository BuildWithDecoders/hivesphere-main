import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardNav } from "./DashboardNav";
import { UserRole } from "@/pages/Onboarding";

interface DashboardSidebarProps {
  userRole: UserRole;
  isCollapsed: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ userRole, isCollapsed, onToggle }: DashboardSidebarProps) => {
  return (
    <aside className={cn(
      "w-64 flex-shrink-0 border-r bg-card p-4 hidden md:flex flex-col transition-[width] duration-300",
      isCollapsed && "w-20 p-2"
    )}>
      <div className={cn(
        "flex items-center gap-2 mb-8 px-3",
        isCollapsed && "px-0 justify-center"
      )}>
        <img 
          src="/logo.png" 
          alt="HiveSphere logo" 
          className={cn("h-8 w-auto opacity-90 transition-all", isCollapsed && "h-8 w-8 object-contain")} 
        />
      </div>
      
      <DashboardNav userRole={userRole} isCollapsed={isCollapsed} />

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
  );
};

export default DashboardSidebar;