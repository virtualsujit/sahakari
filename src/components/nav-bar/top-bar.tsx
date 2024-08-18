import {
  ArrowRightLeft,
  CalendarPlus2,
  Handshake,
  Newspaper,
} from "lucide-react";
import React from "react";
import Link from "next/link";

const Topbar = () => {
  return (
    <section className="  bg-blue-700/85 hidden sm:block   ">
      <div className=" max-w-[1400px] mx-auto flex justify-between items-center px-4   py-2">
        <div className=" gap-4 flex ">
          <Link href="/contact-us" className="flex gap-1 items-center">
            {" "}
            <Handshake size={18} />
            Help Desk
          </Link>
          <Link
            href="/news-and-notices/news"
            className="flex gap-1 items-center"
          >
            {" "}
            <Newspaper size={18} /> News
          </Link>

          <Link href="/forex" className="flex gap-1 items-center ">
            {" "}
            <ArrowRightLeft size={18} /> Forex
          </Link>
        </div>

        <div>
          <button className="flex gap-1 items-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl px-4 py-2 transition-colors duration-200">
            Apply Now <CalendarPlus2 size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Topbar;
