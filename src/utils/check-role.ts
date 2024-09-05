import toast from "react-hot-toast";

export const checkUserRole = async (user: any) => {
  try {
    const response = await fetch(`/api/users?email=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response, "response");

    if (!response.ok) toast.error("User not found or an error occurred.");
    const data = await response.json();
    console.log(data, "user data");

    return data.role;
  } catch (err: any) {
    toast.error(err.message || "Error fetching user role.");
    return null;
  }
};
