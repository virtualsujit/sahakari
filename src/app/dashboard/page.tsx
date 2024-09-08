"use client";

import DashboardLoader from "@/components/dashboard/dashboard-loader";
import NoticeBar from "@/components/nav-bar/notice-bar";
import { supabase } from "@/lib/supabase/client";
import { checkUserRole } from "@/utils/check-role";
import { fetchSession } from "@/utils/fetch-session";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const handleRedirect = async (role: string | null) => {
    if (role === "admin" || role === "super admin") {
      router.replace("/dashboard/team/view");
    } else {
      toast.error("You are not an admin.");
      setShowDialog(true);
    }
  };

  const initialize = async () => {
    try {
      const session = await fetchSession();
      if (!session) {
        router.replace("/dashboard/sign-in");
        return;
      }

      const { user } = session;

      try {
        const response = await fetch(`/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
            email: user.email,
            role: "user",
          }),
        });

        toast.success("User created successfully");
      } catch (error) {
        console.error("Error creating user:", error);
        toast.error("Error creating user.");
      }

      try {
        const role = await checkUserRole(user.id);
        handleRedirect(role);
      } catch (error) {
        console.error("Error checking user role:", error);
        toast.error("Error fetching user role.");
      }
    } catch (error) {
      toast.error("Error during initialization");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const handleRedirectToSignIn = () => router.replace("/dashboard/sign-in");

  return (
    <div>
      <NoticeBar />
      {loading ? (
        <DashboardLoader />
      ) : (
        showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-black">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <p className="mb-4 ">
                You are not an admin. Please sign in as an admin to view this
                page.
              </p>
              <button
                onClick={handleRedirectToSignIn}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Sign In as Admin
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Page;
