import { ReactNode } from "react";
import BottomNavigation, { UserRole } from "./BottomNavigation";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: UserRole;
}

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex bg-background">
      <DashboardSidebar userRole={userRole} />
      <main className="flex-1 md:pb-0 pb-20 overflow-y-auto">
        {children}
      </main>
      <BottomNavigation userRole={userRole} />
    </div>
  );
};

export default DashboardLayout;