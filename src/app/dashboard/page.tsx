"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Navbar } from "@/components/layout/nav-footer";
import BottomBar from "@/components/nav-bar/bottom-bar";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const router = useRouter();

  const fetchSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  };

  const checkUserRole = async (user: any) => {
    try {
      const response = await fetch(`/api/users?email=${user.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("User not found or an error occurred.");
      const data = await response.json();

      return data.role;
    } catch (err: any) {
      console.error(err.message || "Error fetching user role.");
      return null;
    }
  };

  const handleRedirect = async (role: string | null) => {
    if (role === "admin" || role === "super admin") {
      router.push("/dashboard/team/view");
    } else {
      setShowDialog(true);
    }
  };

  const initialize = async () => {
    try {
      const session = await fetchSession();

      if (!session) {
        router.push("/dashboard/sign-in");
        return;
      }

      const { user } = session;

      await fetch("/api/users", {
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

      const role = await checkUserRole(user);
      handleRedirect(role);
    } catch (error) {
      console.error("Error during initialization:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const handleRedirectToSignIn = () => router.push("/dashboard/sign-in");

  return (
    <div>
      <Navbar />
      <BottomBar />
      {loading ? (
        <p>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </p>
      ) : (
        showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 text-black">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="mb-4">
                You are not an admin. Please sign in as an admin to view this
                page.
              </p>
              <button
                onClick={handleRedirectToSignIn}
                className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
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
