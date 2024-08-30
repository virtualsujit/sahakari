"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const ImageCard = () => {
  
  const [visibleImages, setVisibleImages] = useState<string[]>([]);

  // Fetch uploaded photos from Supabase
  const getUploadedPhotos = async () => {
    try {
      const { data, error } = await supabase.storage.from("popup").list("", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

      if (error) throw error;

      const photoURLs = await Promise.all(
        data.map(async (file) => {
          const { data, error } = await supabase.storage
            .from("popup")
            .createSignedUrl(file.name, 8400);

          if (error) throw error;
          return data.signedUrl;
        })
      );

  
      setVisibleImages(photoURLs); // Initially show all images
    } catch (error) {
      console.error("Error fetching uploaded photos:", error);
    }
  };

  useEffect(() => {
    getUploadedPhotos();
  }, []);

  // Hide image by its index
  const handleHideImage = (index: number) => {
    setVisibleImages((prev) => prev.filter((_, i) => i !== index));
  };

  if (visibleImages.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
      {visibleImages.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-transform duration-500 ease-in-out ${
            index === visibleImages.length - 1
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
          style={{ transform: `translateY(${index * 5}px)` }}
        >
          <div className="relative bg-white rounded-lg p-4 pt-6 max-w-[90%] sm:max-w-[550px]">
            <button
              onClick={() => handleHideImage(index)}
              className="absolute top-0 right-0 text-red-700 p-0.5 rounded-full"
            >
              <CircleX />
            </button>
            <Image
              src={image}
              alt={`Uploaded Image - ${index}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
