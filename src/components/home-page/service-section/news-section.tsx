import NewsHomeCard from "@/components/card/news-home-card";

const NewsSection = () => {
  return (
    <div className="flex flex-col ">
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <NewsHomeCard />
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
