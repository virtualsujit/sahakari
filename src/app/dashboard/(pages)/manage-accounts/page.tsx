"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { checkUserRole } from "@/utils/check-role";
import { fetchSession } from "@/utils/fetch-session";
import { fetchAndProcessUsers } from "@/utils/fetch-all-user";
import DashboardLoader from "@/components/dashboard/dashboard-loader";

interface User {
  id: string;
  email: string;
  role: string;
}

const roles = ["super admin", "admin", "user"];

const UserEditor = () => {
  const [email, setEmail] = useState("");
  const [newRole, setNewRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [superAdmin, setSuperAdmin] = useState<User[]>([]);
  const [admins, setAdmins] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetchAndProcessUsers({
      setLoading,
      setSuperAdmin,
      setAdmins,
      setUsers,
      setAllUsers,
    });
  }, []);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const session = await fetchSession();
        if (!session) return router.push("/dashboard/sign-in");

        const { user } = session;
        const role = await checkUserRole(user.id);
        if (role !== "super admin") return router.push("/");

        setHasAccess(true);
      } catch {
        router.push("/dashboard");
      }
    };

    checkAccess();
  }, [router]);

  const handleUpdateRole = async () => {
    if (!email || !newRole) {
      toast.error("Please enter a valid email and select a role.");
      return;
    }

    const user = allUsers.find((user) => user.email.trim() === email.trim());
    if (!user) {
      toast.error("User not found.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user.id, role: newRole }),
      });
      if (!response.ok) throw new Error("Error updating user role.");

      await response.json();
      await fetchAndProcessUsers({
        setLoading,
        setSuperAdmin,
        setAdmins,
        setUsers,
        setAllUsers,
      });
      toast.success("User role updated successfully!");
      setEmail("");
      setNewRole("");
    } catch (error: any) {
      toast.error(error.message || "Error updating user role.");
    } finally {
      setLoading(false);
    }
  };

  if (!hasAccess) return router.push("/dashboard");

  if (loading) return <DashboardLoader />;

  return (
    <div className="max-w-4xl mx-auto p-4">
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
            {superAdmin.length ? (
              superAdmin.map((admin) => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {admin.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
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
                  No super admin found.
                </td>
              </tr>
            )}
            {admins.length ? (
              admins.map((admin) => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {admin.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
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
            {users.length ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
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

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">User Role Editor</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <Select value={newRole} onValueChange={(value) => setNewRole(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role, idx) => (
              <SelectItem key={idx} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <button
          onClick={handleUpdateRole}
          className={`mt-4 px-4 py-2 text-white ${
            loading ? "bg-gray-500" : "bg-blue-500"
          } rounded`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Role"}
        </button>
      </div>
    </div>
  );
};

export default UserEditor;
