import NewsCard from "@/components/card/news-card";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-black flex flex-col-reverse md:flex-row p-4 gap-4">
      <div className="flex-1 md:w-2/3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16].map((item) => (
          <div key={item} className="mb-4">
            <NewsCard />
          </div>
        ))}
      </div>

      <div className="md:w-1/3 mx-auto p-2 bg-gray-100 shadow-md md:sticky md:top-20 md:h-[calc(100vh-140px)]">
        <Image
          src="https://c8.alamy.com/comp/2C47WGP/creative-abstract-modern-corporate-business-vertical-roll-up-banner-design-template-vector-illustration-concept-exhibition-advertising-presentation-2C47WGP.jpg"
          alt="Achievement"
          width={900}
          height={900}
          className=" max-h-96  md:h-full object-contain md:object-cover"
        />
    </div>
    </div>
  );
};

export default page;
