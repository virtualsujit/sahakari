import React from "react";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const NewsHomeCard = () => {
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
            className="rounded-md object-fill h-36 w-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-3/4">
          <p className="bg-green-700 text-white rounded-xl  px-4  p-1 inline-flex items-center gap-2 mb-2">
            <FaCalendar />
            <span>2021-09-12</span>
          </p>
          <h2 className="font-semibold text-lg mb-2">
            माेहरिया सेवाकेन्द्रमा सदस्य शिक्षा तालिम सम्पन्न
          </h2>
          <p className="line-clamp-3   text-gray-700">
            पोखरा रोयल साकोसको वार्षिक कार्यक्रम अनुसार संस्थाले सदस्य शिक्षा
            कार्यक्रम सन्चालन गर्दै आएकोमा मोहरिया सेवाकेन्द्र अन्तर्गतका आफ्ना
            सदस्यहरुलाई मिति २०७८ पौष २३ गते सदस्य शिक्षा तालिम प्रदान गरेको छ ।
            संस्थाका सञ्चालक समितिका अध्यक्ष रुद्रकुमारी गुरुङ्गको अध्यक्षतामा
            सम्पन्न भएको उक्त कार्यक्रममा संस्थाका कोषाध्यक्ष तथा शिक्षा उपसमिति
            संयोजक गीर बहादुर श्रेष्ठ, सन्चलाक
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHomeCard;
