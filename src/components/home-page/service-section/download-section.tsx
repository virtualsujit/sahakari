import DownloadCard from "@/components/card/download-card";
import React from "react";

const DownloadSection = () => {
  return (
    <div>
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <DownloadCard />
        </div>
      ))}
    </div>
  );
};

export default DownloadSection;
