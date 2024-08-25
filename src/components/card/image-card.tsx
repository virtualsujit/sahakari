"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CircleX } from "lucide-react";

const images = [
  { id: 1, src: "/images/notice.png", alt: "Notice 1" },
  { id: 2, src: "/images/notice.png", alt: "Notice 2" },
  { id: 3, src: "/images/notice.png", alt: "Notice 3" },
];

const ImageCard = () => {
  const [visibleImages, setVisibleImages] = useState(
    images.map((image) => image.id)
  );

  const handleHideImage = (id: number) => {
    setVisibleImages((prev) => prev.filter((imageId) => imageId !== id));
  };

  return (
    <>
      {images.map(
        (image) =>
          visibleImages.includes(image.id) && (
            <div
              key={image.id}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
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
          )
      )}
    </>
  );
};

export default ImageCard;
