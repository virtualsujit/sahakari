import toast from "react-hot-toast";

interface User {
  id: string;
  email: string;
  role: string;
}

interface FetchAndProcessUsersProps {
  setLoading: (loading: boolean) => void;
  setSuperAdmin?: (users: User[]) => void;
  setAdmins?: (users: User[]) => void;
  setUsers?: (users: User[]) => void;
  setAllUsers: (users: User[]) => void;
}

export const fetchAndProcessUsers = async ({
  setLoading,
  setSuperAdmin,
  setAdmins,
  setUsers,
  setAllUsers,
}: FetchAndProcessUsersProps) => {
  setLoading(true);
  try {
    const response = await fetch(`/api/alluser`);
    if (!response.ok) throw new Error("Failed to fetch users.");

    const data: User[] = await response.json();
    if (setSuperAdmin)
      setSuperAdmin(data.filter((user) => user.role === "super admin"));
    if (setAdmins) setAdmins(data.filter((user) => user.role === "admin"));
    if (setUsers) setUsers(data.filter((user) => user.role === "user"));
    setAllUsers(data);

    toast.success("Users fetched successfully!");
  } catch (error: any) {
    toast.error(error.message || "Error fetching users.");
  } finally {
    setLoading(false);
  }
};
