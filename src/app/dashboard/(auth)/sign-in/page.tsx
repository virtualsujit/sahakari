"use client";
import { supabase } from "@/lib/supabase/client";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";



const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${location.origin}/api/auth/callback`,
        },
      });

      if (error) {
        toast.error("Error signing up with Google:");
      } else {
        toast.success("Successfully signed up with Google.");
        router.push("/dashboard"); // Redirect to the dashboard after successful login
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

 

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Error logging out:");
      } else {
        toast.success("Successfully logged out.");
        // router.push("/"); // Redirect to the homepage or login page after logout
      }
    } catch (error) {
      console.error("Unexpected error during logout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-black">Login</h1>
        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign in with Google"}
        </button>
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
