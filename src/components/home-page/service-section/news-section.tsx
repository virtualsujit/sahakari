import NewsHomeCard from "@/components/card/news-home-card";
import { ChevronRight } from "lucide-react";

const NewsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-y-auto max-h-[450px]  bar">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <NewsHomeCard />
          </div>
        ))}
      </div>
      <button className="mt-2 self-start  bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
        View All
        <ChevronRight className="inline-flex " size={20} />
      </button>
    </div>
  );
};

export default NewsSection;
