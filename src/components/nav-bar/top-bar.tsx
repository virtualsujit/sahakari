import {
  ArrowRightLeft,
  CalendarPlus2,
  Handshake,
  Newspaper,
} from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <section className=" px-4 mt-2 py-3 bg-blue-700/85  flex justify-between items-center">
      <div className=" gap-4 flex ">
        <button className="flex gap-1 items-center">
          {" "}
          <Handshake size={18} />
          Help Desk
        </button>
        <button className="flex gap-1 items-center">
          {" "}
          <Newspaper size={18}  /> News
        </button>

        <button className="flex gap-1 items-center ">
          {" "}
          <ArrowRightLeft size={18}  /> Forex
        </button>
      </div>

      <div>
        <button className="flex gap-1 items-center bg-yellow-400 rounded-lg px-2 p-0.5 ">
          Apply Now <CalendarPlus2  size={18} />
        </button>
      </div>
    </section>
  );
};

export default Topbar;
