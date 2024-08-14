import React from "react";
import Image from "next/image";

const bulletins = [
  {
    year: 2073,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2073",
  },
  {
    year: 2074,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2074",
  },
  {
    year: 2075,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2075",
  },
  {
    year: 2076,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2076",
  },
  {
    year: 2074,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2074",
  },
  {
    year: 2075,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2075",
  },
  {
    year: 2076,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2076",
  },
  {
    year: 2074,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2074",
  },
  {
    year: 2075,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2075",
  },
  {
    year: 2076,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkEgtyr76H_aMmykOeab7BmI-mFjJS-ImXg&s",
    caption: "Royal Bulletin 2076",
  },
];

const Page = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-7  px-4 text-black ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bulletins.map((bulletin, index) => (
          <div
            key={index}
            className="text-center rounded-b-lg transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-xl"
          >
            <div>
              <Image
                src={bulletin.imageUrl}
                alt={`Bulletin ${bulletin.year}`}
                width={1000}
                height={1000}
                quality={100}
                layout="responsive"
                className="mb-4 h-80 w-96 object-contain"
              />
              <hr className="border-t border-gray-300 " />
              <p className="text-lg font-semibold text-black  my-3 ">
                {bulletin.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
