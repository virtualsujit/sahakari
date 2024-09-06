import toast from "react-hot-toast";

export const checkUserRole = async (id: string) => {
  try {
    const response = await fetch(`/api/users?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return data.role;
  } catch (err: any) {
    toast.error(err.message || "Error fetching user role.");
    return null;
  }
};
