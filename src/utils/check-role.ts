import toast from "react-hot-toast";

export const checkUserRole = async (email:string) => {
  try {
    const response = await fetch(`/api/users?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) toast.error("User not found or an error occurred.");
    const data = await response.json();

    console.log(data, "data");

    return data.role;
  } catch (err: any) {
    toast.error(err.message || "Error fetching user role.");
    return null;
  }
};
