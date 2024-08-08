import BottomBar from "@/components/nav-bar/bottom-bar";
import NoticeBar from "@/components/nav-bar/notice-bar";
import Topbar from "@/components/nav-bar/top-bar";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const info = [
    { icon: <FaPhone />, text: "01-5555555" },
    { icon: <FaLocationDot />, text: "Kathmandu, Nepal" },
    { icon: <FaMailBulk />, text: " hello@nice.com" },
    { icon: <FaCalendar />, text: "Mon - Fri 9:00 - 5:00" },
  ];
  return (
    <div>
      <NoticeBar />
      <Topbar />
      <div className="text-black py-2 px-4 flex justify-between items-center">
        <div className="w-1/2">
          <Link href="/" className="uppercase font-bold text-3xl">
            Thoplo Co-operatives Ltd.
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-1 w-1/2">
          {info.map((item, index) => (
            <div key={index} className="flex items-center ">
              {item.icon}
              <span className="ml-2">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
     <div className="sticky top-0 ">
     <BottomBar />
     </div>
    </div>
  );
};

export default Navbar;
