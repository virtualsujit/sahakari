import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="max-w-md p-1 rounded-xl bg-[#32488A]">
      <h2 className="text-center text-lg  py-0.5  text-white">
        Message From Chairperson
      </h2>
      <div className="bg-white rounded-md p-1 flex gap-4  text-black ">
        <div className="w-1/3">
          <Image
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="chairperson"
            width={100}
            height={100}
            className="rounded-md max-h-44  h-full w-full "
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p>रुद्र कुमारी गुरुङ्ग (मैना)</p>
            <p>Chairperson</p>
            <p>Contact No: 9856081502</p>
            <p>Email: royalchairperson@gmail.com</p>
            <button className="mt-1 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
              Read More
              <ChevronRight className="inline-flex " size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;