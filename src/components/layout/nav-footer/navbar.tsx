import BottomBar from "@/components/nav-bar/bottom-bar";
import NoticeBar from "@/components/nav-bar/notice-bar";
import Topbar from "@/components/nav-bar/top-bar";
import Link from "next/link";
import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";

const Navbar = () => {
  const info = [
    { icon: <FaPhone />, text: "01-5555555" },
    { icon: <FaLocationDot />, text: "Kathmandu, Nepal" },
    { icon: <FaEnvelope />, text: " hello@nice.com" },
    { icon: <FaCalendarAlt />, text: "Mon - Fri 9:00 - 5:00" },
  ];
  return (
    <div>
      <NoticeBar />
      <Topbar />
      <section className="bg-white max-w-[1400px] mx-auto px-4">
        <div className="  py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="uppercase font-bold text-3xl w-3/4">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={700}
                height={100}
                className=" h-20  w-3/4 object-contain"
              />
            </Link>
            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-grow w-1/4">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search...."
                  className="w-full py-2 px-4 border rounded-l-lg focus:outline-none"
                />
                <button className="absolute -right-3 top-0 bottom-0 p-3 bg-green-700 text-white rounded-full hover:bg-green-800">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-3 place-content-end place-items-start">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhone className="text-green-700" />
              <p>+977-61-588833, 587833</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-green-700" />
              <p>Pokhara Metropolitan City-10</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope className="text-green-700" />
              <p>info@royalcooperative.com</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaCalendarAlt className="text-green-700" />
              <p>Mon - Fri 9:00 - 5:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
