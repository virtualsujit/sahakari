"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase/client";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import { Cross1Icon } from "@radix-ui/react-icons";

const Files = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState([
    {
      id: "",
      url: "",
    },
  ]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeImage = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const uploadFiles = async () => {
    setUploading(true);
    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const fileName = `${file.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from("files")
          .upload(fileName, file);

        if (uploadError) {
          throw uploadError;
        }

        const { data: publicUrlData } = supabase.storage
          .from("files")
          .getPublicUrl(fileName);

        const fileUrl = publicUrlData.publicUrl;

        const response = await fetch("/api/files", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: fileUrl }),
        });

        if (!response.ok) {
          throw new Error("Failed to save file data.");
        }
      });

      await Promise.all(uploadPromises);
      toast.success("Files uploaded successfully!");
      setSelectedFiles([]);
      getUploadedFiles();
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload files.");
    } finally {
      setUploading(false);
    }
  };

  const getUploadedFiles = async () => {
    try {
      const response = await fetch("/api/files");
      const data = await response.json();
      setUploadedPhotos(
        data.map((file: any) => ({ id: file.id, url: file.url }))
      );
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
      toast.error("Failed to fetch uploaded files.");
    }
  };

  useEffect(() => {
    getUploadedFiles();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "application/pdf",
    multiple: true,
  });

  const handleDelete = async (id: string, imageUrl: string) => {
    try {
      if (imageUrl) {
        const fileName = imageUrl.split("/").pop();

        if (fileName) {
          const { error: deleteError } = await supabase.storage
            .from("files")
            .remove([fileName]);

          if (deleteError) {
            throw deleteError;
          }
        } else {
          throw new Error("Invalid image URL, unable to extract file name.");
        }
      }

      const response = await fetch(`/api/files`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the photo.");
      }

      toast.success("Photo deleted successfully!");
      getUploadedFiles(); // Refresh the uploaded photos list
    } catch (error) {
      console.error("Error deleting the photo:", error);
      toast.error("Failed to delete the photo.");
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="bg-white shadow-lg mx-4 p-8 rounded-xl relative">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Upload Pop-Up Photos
        </h2>

        <div
          {...getRootProps()}
          className="border-dashed border-4 border-blue-300 p-10 text-center cursor-pointer hover:border-blue-500 transition-colors duration-300 rounded-lg bg-blue-50"
        >
          <input {...getInputProps()} />
          <p className="text-blue-700 font-medium">
            Drag & drop photos here, or click to select files
          </p>
        </div>

        {selectedFiles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative">
                <p className="text-gray-800">{file.name}</p>
                <button
                  className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full transition-opacity duration-300"
                  onClick={() => removeImage(index)}
                >
                  <XCircle size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          className="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={uploadFiles}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Photos"}
        </button>
      </div>

      <div className="bg-white shadow-lg mx-4 p-8 rounded-xl mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Uploaded Pop-Up Photos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uploadedPhotos.map((data, index) => (
            <div key={index} className="relative group">
              <div>
                <p className="text-gray-800">{data.url.split("/").pop()}</p>
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                onClick={() => handleDelete(data.id, data.url)}
              >
                <Cross1Icon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Files;
