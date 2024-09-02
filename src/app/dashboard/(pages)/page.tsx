"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { PrismaClient } from "@prisma/client";

const Page = () => {
  const checkSessionAndModifyUser = async () => {
    try {
      // Get session from Supabase
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        console.log("Redirect to login");
        // Handle redirection logic if necessary
        return;
      }

      const { user } = session;

      try {
        const response = await fetch("/api/users", {
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

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error creating user:", error);
      }

      console.log("New user created");
    } catch (error) {
      console.error("Error checking session or modifying user:", error);
    }
  };

  useEffect(() => {
    checkSessionAndModifyUser();
  }, []);

  return <div>page</div>;
};

export default Page;
