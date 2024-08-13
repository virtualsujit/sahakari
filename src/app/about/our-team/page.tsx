import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";
import { ChevronsRight } from "lucide-react";

const Page = () => {
  return (
    <div className="text-black max-w-[1400px] mx-auto py-8 flex gap-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 w-3/4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            className="text-center bg-white p-2 rounded-lg shadow-md"
            key={item}
          >
            <Image
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="chairperson"
              width={500}
              height={500}
              className="border-2 w-full border-gray-200 rounded-lg object-cover"
            />
            <p className="mt-4 font-semibold text-lg">Sujit Dhungana</p>
            <p className="text-sm text-gray-600">Chairperson</p>
          </div>
        ))}
      </div>
      <div className="w-1/4 bg-green-700 rounded-lg p-6 text-white sticky top-20 max-h-[calc(100vh-400px)] overflow-y-auto">
        <h2 className="text-xl text-center font-bold mb-8">Meet Our Team</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-0 ">
            <Link
              href="/about/our-team/account-supervision-committee"
              className="flex items-center text-white hover:ml-4 transition-all duration-300 "
            >
              Account Supervision Committee
              <ChevronsRight />
            </Link>
            <hr className="border-white w-full" />
          </div>
          <div className="flex flex-col items-start gap-0 ">
            <Link
              href="/about/our-team/advisory-council"
              className="flex items-center text-white hover:ml-4 transition-all duration-300 "
            >
              Advisory Council
              <ChevronsRight />
            </Link>
            <hr className="border-white w-full" />
          </div>
          <div className="flex flex-col items-start gap-0 ">
            <Link
              href="/about/our-team/board-of-directors"
              className="flex items-center text-white hover:ml-4 transition-all duration-300 "
            >
              Top Management
              <ChevronsRight />
            </Link>
            <hr className="border-white w-full" />
          </div>
          <div className="flex flex-col items-start gap-0 ">
            <Link
              href="/about/our-team/staff-members"
              className="flex items-center text-white hover:ml-4 transition-all duration-300 "
            >
              Staff Members
              <ChevronsRight />
            </Link>
            <hr className="border-white w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
