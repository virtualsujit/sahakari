import {
  ArrowRightLeft,
  CalendarPlus2,
  Handshake,
  Newspaper,
} from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <section className="  bg-blue-700/85  ">
      <div className=" max-w-[1400px] mx-auto flex justify-between items-center px-4   py-2">
        <div className=" gap-4 flex ">
          <button className="flex gap-1 items-center">
            {" "}
            <Handshake size={18} />
            Help Desk
          </button>
          <button className="flex gap-1 items-center">
            {" "}
            <Newspaper size={18} /> News
          </button>

          <button className="flex gap-1 items-center ">
            {" "}
            <ArrowRightLeft size={18} /> Forex
          </button>
        </div>

        <div>
          <button className="flex gap-1 items-center bg-yellow-400 rounded-xl px-2 p-0.5 ">
            Apply Now <CalendarPlus2 size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
