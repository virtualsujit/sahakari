"use client";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  // const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        // router.push("/login"); // Redirect to login if not authenticated
        console.log("redirect to login");
        return { redirect: { destination: "/login", permanent: false } };
      }
    };
    checkSession();
  }, [ ]);

  return <div>page</div>;
};

export default Page;
