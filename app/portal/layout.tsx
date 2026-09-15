import { PortalSidebar } from "@/components/portal/PortalSidebar";
import { PortalHeader } from "@/components/portal/PortalHeader";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <PortalSidebar />

      <div className="lg:mr-72">
        <PortalHeader />

        <main className="min-h-screen p-5 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}