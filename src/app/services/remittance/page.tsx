import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-black py-8 px-4">
      <div>
        We provide various services for online money transfers. Our service is
        the best known, most secure and reliable online service. You can send or
        receive money within minute to/from other people around the globe. You
        pay the lowest fees in the market for your transfer. Recipients do not
        require a bank account to receive funds.
      </div>
      <h2 className="text-xl  text-blue-700">Our remittance Providers</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div className="bg-white rounded-lg shadow-lg max-w-xl" key={item}>
            <Image
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Achievement"
              width={900}
              height={900}
              className="   object-cover hover:scale-95 transform transition-all duration-500"
            />
            <p className="bg-[#1d2e61] text-center py-2 text-white">
              Money Gram
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
