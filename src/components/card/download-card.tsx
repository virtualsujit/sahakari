import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const DownloadCard = () => {
  return (
    <div className="m-2">
      <div className="bg-white rounded-md p-2 flex gap-2 shadow-lg text-black">
        {/* Image Section */}
        <div className="w-1/4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="chairperson"
            width={100}
            height={100}
            className="rounded-md object-fill h-32 w-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-3/4">
          <h2 className="font-semibold text-green-700 text-lg mb-2">
            Vacancy Application Form
          </h2>
          <div className="flex gap-2 items-center">
            <span>Download</span> 
            <FaDownload className="inline text-green-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
