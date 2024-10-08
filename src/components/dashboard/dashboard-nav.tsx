"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaSpinner } from "react-icons/fa";
import { fetchUser } from "@/utils/fetch-user";

const DashboardNav = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    role: "",
    url: "",
    name: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Error logging out.");
      } else {
        toast.success("Successfully logged out.");
        router.push("/");
      }
    } catch (error) {
      toast.error("Unexpected error during logout.");
    }
  };

  useEffect(() => {
    fetchUser({
      setLoading,
      setUser,
    });
  }, []);

  if (loading) {
    return (
      <header className="bg-green-700">
        <nav className="flex items-center justify-between px-4 py-2 text-white max-w-[1400px] mx-auto">
          <div className="text-lg font-semibold">Dashboard</div>
          <div>
            <FaSpinner className="animate-spin" />
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-green-700">
      <nav className="flex items-center justify-between px-4 py-2 text-white max-w-[1400px] mx-auto">
        <div className="text-lg font-semibold">Dashboard</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.url} alt={user.name} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="rounded-lg shadow-lg"
            style={{
              background: "radial-gradient(#32488A, #1d2e61)",
            }}
          >
            <DropdownMenuLabel className="text-sm font-semibold text-gray-300">
              Name: {user.name}
            </DropdownMenuLabel>
            <DropdownMenuItem className="text-gray-200">
              Email: {user.email}
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-200">
              Role: {user.role}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default DashboardNav;
