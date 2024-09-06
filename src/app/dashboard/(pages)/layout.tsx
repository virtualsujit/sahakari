"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import DashboardNav from "@/components/dashboard/dashboard-nav";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          router.push("/dashboard/sign-in");
          return;
        }

        const { user } = session;
        const response = await fetch(`/api/users?id=${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user role.");
        }

        const data = await response.json();
        const role = data.role;

        if (role === "admin" || role === "super admin") {
          setHasAccess(true);
        } else {
          router.push("/dashboard/sign-in");
        }
      } catch (error) {
        console.error("Error checking user access:", error);
        router.push("/dashboard/sign-in");
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hasAccess) {
    return null; // or show an alternative loading state
  }

  return (
    <section>
      <DashboardNav />
      <div className="flex max-w-[1400px] mx-auto">
        <div className="hidden sm:block">
          <DashboardSidebar />
        </div>
        <div className="m-2 bg-gray-100 w-full min-h-screen text-black rounded-md">
          {children}
        </div>
      </div>
    </section>
  );
}
