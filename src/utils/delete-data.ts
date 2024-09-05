import { supabase } from "@/lib/supabase/client";
import toast from "react-hot-toast";

export const handleDelete = async (
  id: string,
  imageUrl: string,
  bucket: string,
  endpoint: string
) => {
  if (imageUrl) {
    const fileName = imageUrl.split("/").pop();

    console.log(fileName);

    if (fileName) {
      const { data, error: deleteError } = await supabase.storage
        .from(bucket)
        .remove([fileName]);

      console.log(data, deleteError, "data and error");

      if (deleteError) {
        console.error("Error deleting image:", deleteError);
        throw deleteError;
      }
    } else {
      console.error("Invalid image URL, unable to extract file name.");
    }
  }

  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    console.log(response);

    if (!response.ok) {
      toast.success("Failed to delete the article.");
    }
  } catch (error) {
    console.error("Error deleting the article:", error);
  }
};
