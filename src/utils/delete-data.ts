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

      if (deleteError) {
        toast.error("Error deleting image ");
        throw deleteError;
      }
    } else {
      toast.error("Invalid image URL, unable to extract file name.");
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

    toast.success(" deleted successfully.");
    if (!response.ok) {
      toast.error("Failed to delete the article.");
    }
  } catch (error) {
    console.log(error);
    toast.error(`Error deleting the article ${error}`);
  }
};
