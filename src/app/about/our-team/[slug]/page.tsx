import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="text-black  max-w-[1400px] mx-auto py-4 flex gap-4 justify-between">
      <div className="grid grid-cols-4 place-content-center place-items-center gap-4 w-3/4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div className="text-center  " key={item}>
            <div className="">
              <Image
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="chairperson"
                width={900}
                height={900}
                className="border-2  hover:shadow-lg  size-40 object-cover "
              />
            </div>
            <p className="mt-2 font-semibold">Sujit Dhungana</p>
            <p className="text-sm text-gray-600">Chairperson</p>
          </div>
        ))}
      </div>
      <div className="w-1/4 bg-green-700  rounded-sm flex flex-col items-center justify-start p-4  text-white">
        <h2> Meet Our Team</h2>
        <div className="flex justify-between flex-col items-start">
          <Link href="/about/our-team">Our Team</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
