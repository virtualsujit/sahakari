"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase/client";
import { v4 } from "uuid";

const PhotoUploadPopup = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  console.log(selectedFiles);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeImage = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const uploadPhotos = async () => {
    setUploading(true);
    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const fileName = `${v4()}_${file.name}`;
        const { error } = await supabase.storage
          .from("popup")
          .upload(`/${fileName}`, file);

        if (error) {
          throw error;
        }

        return fileName;
      });

      await Promise.all(uploadPromises);
      setSelectedFiles([]); // Clear selected files after successful upload
      getUploadedPhotos(); // Refresh the uploaded photos list
    } catch (error) {
      console.error("Error uploading photos:", error);
    } finally {
      setUploading(false);
    }
  };

  const getUploadedPhotos = async () => {
    try {
      const { data, error } = await supabase.storage.from("popup").list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

      if (error) {
        throw error;
      }

      const photoURLs = await Promise.all(
        data.map(async (file) => {
          const { data, error } = await supabase.storage
            .from("popup")
            .createSignedUrl(file.name, 3600);

          if (error) {
            throw error;
          }

          return data.signedUrl;
        })
      );

      setUploadedPhotos(photoURLs);
      console.log("Uploaded photos:", photoURLs);
    } catch (error) {
      console.error("Error fetching uploaded photos:", error);
    }
  };

  useEffect(() => {
    getUploadedPhotos();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: " image/*",
    multiple: true,
  });

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
            {selectedFiles.map((file, index) => {
              return (
                <div key={index} className="relative  ">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    height={600}
                    width={800}
                    className="w-full h-24 rounded-lg object-contain"
                  />
                  <button
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full   transition-opacity duration-300"
                    onClick={() => removeImage(index)}
                  >
                    <XCircle size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <button
          className="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={uploadPhotos}
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
          {uploadedPhotos
            .filter(
              (url) =>
                url !==
                "https://rajlfuzacemgbwkdntwk.supabase.co/storage/v1/object/sign/popup/.emptyFolderPlaceholder?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3B1cC8uZW1wdHlGb2xkZXJQbGFjZWhvbGRlciIsImlhdCI6MTcyNTM0MzgzNywiZXhwIjoxNzI1MzQ3NDM3fQ.10nuizoNaQ9dm13Pna8EEhDEYw3UYWtuIQ_8BG3Xt9w"
            )
            .map((url, index) => (
              <div key={index} className="relative group">
                <Image
                  src={url}
                  alt={`uploaded-${index}`}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="object-cover w-full h-40 rounded-lg shadow-md"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadPopup;
