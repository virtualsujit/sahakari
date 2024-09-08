import { supabase } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface User {
  id: string;
  email: string;
  role: string;
  url: string;
  name: string;
}

interface fetchUser {
  setLoading: (loading: boolean) => void;
  setUser: (user: User) => void;
}
export const fetchUser = async ({ setLoading, setUser }: fetchUser) => {
  try {
    setLoading(true);
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      redirect("/dashboard/sign-in");
    }

    const { user } = session;

    const response = await fetch(`/api/users?id=${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      toast.error("Failed to fetch user role.");
      return;
    }

    const data = await response.json();

    setUser({
      id: user.id,
      email: user.email ?? "",
      role: data.role,
      url: user.user_metadata?.avatar_url ?? "",
      name: user.user_metadata?.full_name ?? "",
    });
  } catch (error) {
    toast.error("Error fetching user data.");
    redirect("/dashboard/sign-in");
  } finally {
    setLoading(false);
  }
};
