import DashboardNav from "@/components/dashboard/dashboard-nav";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <DashboardNav />
      <div className="flex max-w-[1400px] mx-auto ">
        <DashboardSidebar />
        <div className="m-2 bg-gray-100 w-full min-h-screen text-black rounded-md ">{children}</div>
      </div>
    </section>
  );
}
