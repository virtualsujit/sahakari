"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { XCircle } from "lucide-react";
import Image from "next/image";

const PhotoUploadPopup = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    },
    [selectedFiles]
  );

  const removeImage = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

  return (
    <div className="  flex flex-col  items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">Upload Photos</h2>
        <div
          {...getRootProps()}
          className="border-dashed border-2 border-gray-300 p-6 text-center cursor-pointer hover:border-gray-500 transition-colors"
        >
          <input {...getInputProps()} />
          <p>Drag & drop photos here, or click to select files</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative">
              <Image
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                height={96}
                width={96}
                className="object-cover w-full h-24 rounded"
              />
              <button
                className="absolute top-1 right-1 text-white bg-red-500 rounded-full"
                onClick={() => removeImage(index)}
              >
                <XCircle size={18} />
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => console.log("Uploaded Photos:", selectedFiles)}
        >
          Upload Photos
        </button>
      </div>
    </div>
  );
};

export default PhotoUploadPopup;
