"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CircleX } from "lucide-react";

const images = [
  { id: 1, src: "/images/notice.png", alt: "Notice 1" },
  { id: 2, src: "/images/logo.png", alt: "Notice 2" },
  { id: 3, src: "/images/notice.png", alt: "Notice 3" },
];

const ImageCard = () => {
  const [visibleImages, setVisibleImages] = useState(images);

  const handleHideImage = (id: number) => {
    setVisibleImages((prev) => prev.filter((image) => image.id !== id));
  };

  if (visibleImages.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 ">
      {visibleImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute transition-transform duration-500  ease-in-out ${
            index === visibleImages.length - 1
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
          style={{ transform: `translateY(${index * 5}px)` }}
        >
          <div className="relative bg-white rounded-lg p-4 pt-6 max-w-[90%] sm:max-w-[550px]">
            <button
              onClick={() => handleHideImage(image.id)}
              className="absolute top-0 right-0 text-red-700 p-0.5 rounded-full"
            >
              <CircleX />
            </button>
            <Image
              src={image.src}
              alt={image.alt}
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
