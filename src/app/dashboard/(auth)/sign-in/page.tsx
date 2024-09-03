"use client";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
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
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={700}
            height={800}
            quality={100}
            className="w-full max-w-[400px] mx-auto object-contain"
            priority
          />
        </Link>

        <h1 className="text-xl font-bold text-gray-900 text-center">
          Login to Get Started
        </h1>

        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
