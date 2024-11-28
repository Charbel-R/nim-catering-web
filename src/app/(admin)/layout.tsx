import { cookies } from "next/headers";

import DashboardSidebar from "@/components/admin/dashboard-sidebar";
import Footer from "@/components/site/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />
      <SidebarInset>
        <header className="p-4">
          <SidebarTrigger />
          <ThemeToggle />
        </header>
        <main className="grow">{children}</main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
