import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-black py-7">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Outstanding Member</h1>
        <p className="mt-4">
          We are proud to share our achievements with you. We have received
          several awards and accolades for our work in the field of education
          and research. We are committed to providing the best possible
          education to our students and helping them achieve their full
          potential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Achievement"
            width={900}
            height={900}
            className="w-full h-72 object-cover rounded-lg"
          />
          <div className="mt-4 border-l-4 pl-4 border-green-500">
            <p className="hover:ml-3 transition-all duration-200">
              {" "}
              MR.Shankar Lamicchane
            </p>

            <p className="hover:ml-3 transition-all duration-200">
              Senior Finance Manager
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Achievement"
            width={900}
            height={900}
            className="w-full h-72 object-cover rounded-lg"
          />
          <div className="mt-4 border-l-4 pl-4 border-green-500">
            <p className="hover:ml-3 transition-all duration-200">
              {" "}
              MR.Shankar Lamicchane
            </p>

            <p className="hover:ml-3 transition-all duration-200">
              Senior Finance Manager
            </p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Achievement"
            width={900}
            height={900}
            className="w-full h-72 object-cover rounded-lg"
          />
          <div className="mt-4 border-l-4 pl-4 border-green-500">
            <p className="hover:ml-3 transition-all duration-200">
              {" "}
              MR.Shankar Lamicchane
            </p>

            <p className="hover:ml-3 transition-all duration-200">
              Senior Finance Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
