"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Navbar } from "@/components/layout/nav-footer";
import BottomBar from "@/components/nav-bar/bottom-bar";
import toast from "react-hot-toast";
import { fetchSession } from "@/utils/fetch-session";
import { checkUserRole } from "@/utils/check-role";
import Topbar from "@/components/nav-bar/top-bar";
import NoticeBar from "@/components/nav-bar/notice-bar";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const router = useRouter();

  // Handle the redirection based on the user's role
  const handleRedirect = async (role: string | null) => {
    if (role === "admin" || role === "super admin") {
      router.replace("/dashboard/team/view"); // use replace to avoid adding a new entry in history
    } else {
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

      // Send user data only if not already present in the database
      const { data } = await supabase
        .from("users")
        .select("id")
        .eq("id", user.id)
        .single();
      if (!data) {
        await supabase
          .from("users")
          .insert([{ id: user.id, email: user.email, role: "user" }]);
      }

      const role = await checkUserRole(user);

      console.log(role, "role");  
      handleRedirect(role);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
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
