import NoticeBar from "@/components/nav-bar/notice-bar";
import Topbar from "@/components/nav-bar/top-bar";
import NepaliDate from "nepali-date-converter";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  // Create a new NepaliDate object with the current date
  const nepaliDate = new NepaliDate();

  // Format the date in Nepali
  const formattedNepaliDate = nepaliDate.format("YYYY, MMMM DD ddd", "np");

  return (
    <div>
      <NoticeBar />
      {/* <Topbar /> */}
      <section className="bg-white max-w-[1400px] mx-auto px-4">
        <div className="py-4 flex justify-between items-center gap-8">
          {/* Brand Logo */}
          <div className="flex items-center justify-center md:justify-between  gap-8 flex-1   ">
            <Link href="/" className="">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={700}
                height={800}
                quality={100}
                className=" w-full  md:w-96 object-contain"
                priority
              />
            </Link>
            {/* Search Bar */}
            <div className="relative lg:flex items-center hidden  flex-1 ">
              <input
                type="search"
                placeholder="Search..."
                className="w-full py-2 px-4 border rounded-l-lg focus:outline-none text-black"
              />
              <button
                className="p-3 bg-green-700 text-white rounded-r-lg hover:bg-green-800"
                aria-label="Search"
              >
                <FaSearch />
              </button>
            </div>
          </div>
          {/* Contact Info */}
          <div className="hidden md:grid grid-cols-2 gap-3 text-gray-700 text-[10px] sm:text-sm  ">
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-700" />
              <p>+977-61-588833, 587833</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-700" />
              <p>Pokhara Metropolitan City-10</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-700" />
              <p>info@royalcooperative.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-green-700" />
              <p>{formattedNepaliDate}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
