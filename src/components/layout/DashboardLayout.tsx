import { ReactNode, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DashboardNav } from "./DashboardNav";
import { UserRole } from "@/pages/Onboarding";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: UserRole;
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Desktop Sidebar */}
      <DashboardSidebar 
        userRole={userRole} 
        isCollapsed={isCollapsed} 
        onToggle={handleToggle} 
      />
      
      <div className="flex flex-col flex-1">
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-4">
              <div className="flex items-center gap-2 mb-8">
                <img src="/logo.png" alt="HiveSphere logo" className="h-8 w-auto opacity-90" />
              </div>
              <DashboardNav userRole={userRole} isCollapsed={false} isMobile={true} />
            </SheetContent>
          </Sheet>
          <div className="flex-1">
            {/* You can add a mobile page title here if needed */}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;