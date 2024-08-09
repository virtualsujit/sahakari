import Image from "next/image";
import React from "react";

const BankingSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-8">
      <div className="text-black flex justify-between  ">
        <div className="space-y-4">
          <div className="">
            <div className="flex items-center justify-center gap-2">
              <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
              <h2 className="text-2xl">ATM</h2>
              <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
            </div>
          </div>

          <p className="text-xl">
            We provide various services for online money transfers. Our service
            is the best known, most secure and reliable online service. We
            provide various services for online money transfers. Our service is
            the best known, most secure and reliable online service.
          </p>
          <div className=" flex items-center justify-center">
            <Image
              src="/images/Home/mobile-bank.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-96  object-contain mt-3"
            />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="flex items-center justify-center">
            <Image
              src="/images/Home/atm.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-96  object-contain mt-3"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
            <h2 className="text-2xl">Mobile Banking Service</h2>
            <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
          </div>
          <p className="text-xl ">
            We provide various services for online money transfers. Our service
            is the best known, most secure and reliable online service. We
            provide various services for online money transfers. Our service is
            the best known, most secure and reliable online service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankingSection;
