"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase/client";

interface User {
  id: string;
  email: string;
  role: string;
}

const UserEditor = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState("");
  const [fLoading, setFloading] = useState(false);
  const [uLoading, setUloading] = useState(false);

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
        const response = await fetch(`/api/users?email=${user.email}`, {
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

        if (role === "super admin") {
          setHasAccess(true);
        } else {
          router.push("/dashboard/sign-in");
        }
      } catch (error) {
        console.error("Error checking user access:", error);
        router.push("/dashboard/sign-in");
      } finally {
        setFloading(false);
      }
    };

    checkAccess();
  }, [router]);

  const handleFetchUser = async () => {
    setFloading(true);

    try {
      const response = await fetch(
        `/api/users?email=${encodeURIComponent(email)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!hasAccess) {
        return null; // or show a loading state if preferred
      }

      if (!response.ok) {
        throw new Error("User not found or an error occurred.");
      }
      const data = await response.json();
      setUser(data);
      setNewRole(data.role);
      toast.success("User fetched successfully!");
    } catch (err: any) {
      toast.error(err.message || "User not found or an error occurred.");
      setUser(null);
      toast.error(err.message || "User not found or an error occurred.");
    } finally {
      setFloading(false);
    }
  };

  const handleUpdateRole = async () => {
    if (!user || !user.id || !newRole) return;
    setUloading(true);

    try {
      const response = await fetch(`/api/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          role: newRole,
        }),
      });
      if (!response.ok) {
        throw new Error("Error updating user role.");
      }
      const data = await response.json();
      setUser(data);
      toast.success("User role updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Error updating user role.");
    } finally {
      setUloading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded mt-4">
      <h2 className="text-xl font-semibold mb-4">User Role Editor</h2>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleFetchUser}
          className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          {fLoading ? "Loading..." : "Fetch User"}
        </button>
      </div>

      {user && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">User Info</h3>
          <p>Email: {user.email}</p>
          <p>Current Role: {user.role}</p>
          <div className="mt-4">
            <label className="block mb-2 font-medium">New Role:</label>
            <input
              type="text"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleUpdateRole}
              className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded"
            >
              {uLoading ? "Updating..." : "Update Role"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEditor;
