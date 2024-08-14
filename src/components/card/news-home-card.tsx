import React from "react";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const NewsHomeCard = () => {
  return (
    <div className="m-2">
      <div className="bg-white rounded-md p-2 flex items-start gap-4 shadow-lg text-black">
        {/* Image Section */}
        <div className="flex-shrink-0 w-1/3">
          <Image
            src="https://marketplace.canva.com/EAFfT3S71Oc/1/0/1600w/canva-red-blue-modern-breaking-news-youtube-thumbnail-qJRhA0AmHOw.jpg"
            alt="News"
            width={500}
            height={500}
            className="rounded-md object-cover h-32 w-full"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="bg-green-700 text-white rounded-full text-xs px-3 py-1 inline-flex items-center gap-2 mb-2">
            <FaCalendar />
            <span>2021-09-12</span>
          </p>
          <h2 className="font-semibold text-sm my-1">
            माेहरिया सेवाकेन्द्रमा सदस्य शिक्षा तालिम सम्पन्न
          </h2>

          <p className="line-clamp-3 text-sm text-gray-700">
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
