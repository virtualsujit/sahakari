"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase/client";
import { role } from "@/data/role";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [users, setUsers] = useState<User[]>([]);
  const [admins, setAdmins] = useState<User[]>([]);
  const [superAdmin, setSuperAdmin] = useState<User | null>(null);
  const [hasAccess, setHasAccess] = useState(false);

  const router = useRouter();
  const handleFetchUsers = async () => {
    setFloading(true);

    try {
      const response = await fetch(`/api/alluser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await response.json();

      console.log(data);
      const adminsList = data.filter((user: User) => user.role === "admin");
      const usersList = data.filter((user: User) => user.role === "user");
      const superAdmin = data.find((user: User) => user.role === "super admin");

      setSuperAdmin(superAdmin || null);
      setAdmins(adminsList);
      setUsers(usersList);
      toast.success("Users fetched successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to fetch users.");
      setAdmins([]);
      setUsers([]);
    } finally {
      setFloading(false);
    }
  };

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

  useEffect(() => {
    handleFetchUsers();
  }, []);

  if (!hasAccess) {
    return null;
  }

  const handleUpdateRole = async () => {
    if (!email || !newRole) return;
    console.log("email", email);
    console.log("newRole", newRole);

    setUloading(true);

    try {
      const response = await fetch(`/api/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          role: newRole,
        }),
      });

      if (!response.ok) {
        throw new Error("Error updating user role.");
      }

      const data = await response.json();
      setUser(data);
      handleFetchUsers();
      toast.success("User role updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Error updating user role.");
    } finally {
      setUloading(false);
    }
  };

  const role = [
    {
      id: 1,
      role: "super admin",
    },
    {
      id: 2,
      role: "admin",
    },
    {
      id: 3,
      role: "user",
    },
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4  ">
        <h2 className="text-xl font-semibold mb-4">Admins and Super Admin</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {superAdmin && (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {superAdmin.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {superAdmin.role}
                  </td>
                </tr>
              )}
              {admins.length > 0 ? (
                admins.map((admin) => (
                  <tr key={admin.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {admin.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {admin.role}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No admins found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-4">
        <h2 className="text-xl font-semibold mb-4">User Role Editor</h2>
        <div className="mb-4">
          <div className="mb-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />

              <div className="mt-4  w-full  ">
                <Select
                  onValueChange={(value) => setNewRole(value)}
                  value={newRole}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectContent className="bg-slate-900">
                      {role.map((item) => (
                        <SelectItem
                          key={item.id}
                          value={item.role}
                          className="hover:bg-green-300 rounded-md cursor-pointer"
                        >
                          {item.role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectContent>
                </Select>
              </div>
              <button
                onClick={handleUpdateRole}
                className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded"
              >
                {uLoading ? "Updating..." : "Update Role"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditor;
