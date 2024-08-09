import NewsCard from "@/components/card/news-card";
import React from "react";

const NewsSection = () => {
  return (
    <div className="flex flex-col ">
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <NewsCard />
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
