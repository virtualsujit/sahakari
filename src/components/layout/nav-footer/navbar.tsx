import BottomBar from "@/components/nav-bar/bottom-bar";
import NoticeBar from "@/components/nav-bar/notice-bar";
import Topbar from "@/components/nav-bar/top-bar";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

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
      <div className="text-black  max-w-[1400px] mx-auto py-2 flex justify-between items-center">
        <div className="w-1/2 px-">
          <Link href="/" className="uppercase font-bold text-3xl w-3/4">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={700}
              height={100}
              className=" h-20  w-3/4 object-contain"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 place-content-end place-items-start w-1/2 px-4 ">
          {info.map((item, index) => (
            <div key={index} className="flex items-center ">
              <p className="text-green-500"> {item.icon}</p>
              <span className="ml-2 text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
