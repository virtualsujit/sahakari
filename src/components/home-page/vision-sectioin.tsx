import React from "react";

const VisionSection = () => {
  return (
    <div
      className="bg-[#32488A] w-full text-white"
      style={{
        backgroundImage: 'url("/images/Home/box.png")',
        backgroundColor: "#32488A !important",
        backgroundRepeat: "repeat !important",
        backgroundSize: "auto !important",
      }}
    >
      <div className="h-32 flex flex-col items-center max-w-[1400px] mx-auto justify-center text-white text-2xl font-semibold">
        <p>परिकल्पना</p>
        <p>&quot;सुखी सदस्य, दिगाे सहकारी&quot;</p>
      </div>
    </div>
  );
};

export default VisionSection;
