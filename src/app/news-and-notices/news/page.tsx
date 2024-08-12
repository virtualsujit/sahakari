import NewsCard from "@/components/card/news-card";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-black flex justify-between p-4">
      <div className="w-full md:w-3/4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16].map((item) => (
          <div key={item}>
            <NewsCard />
          </div>
        ))}
      </div>

      <div className="hidden md:block md:w-1/4 sticky top-20 self-start">
        <div className="w-full border-2 p-4">
          <div className="w-full flex items-center justify-center">
            ad banner
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
