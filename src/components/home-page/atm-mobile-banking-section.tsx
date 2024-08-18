import Image from "next/image";
import React from "react";
import SectioinTitle from "./section-title";

const BankingSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-8 px-4">
      <div className="text-black flex flex-col lg:flex-row justify-between gap-8">
        <div className="space-y-4 lg:w-1/2">
          <SectioinTitle title="ATM" />
          <p className="text-lg lg:text-xl">
            We provide various services for online money transfers. Our service
            is the best known, most secure and reliable online service. We
            provide various services for online money transfers. Our service is
            the best known, most secure and reliable online service.
          </p>
          <div className="flex items-center justify-center">
            <Image
              src="/images/Home/mobile-bank.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-64 lg:h-96 object-contain mt-3 hidden lg:block"
            />
            <Image
              src="/images/Home/atm.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-64 lg:h-96 object-contain mt-3 lg:hidden"
            />
          </div>
        </div>
        <div className="space-y-4 lg:w-1/2 flex flex-col-reverse  lg:flex-col  justify-between gap-8">
          <div className="flex items-center justify-center ">
            <Image
              src="/images/Home/atm.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-64 lg:h-96 object-contain mt-3 hidden lg:block"
            />
            <Image
              src="/images/Home/mobile-bank.png"
              width={500}
              height={300}
              alt=""
              className="rounded-xl h-64 lg:h-96 object-contain mt-3 lg:hidden "
            />
          </div>
          <div>
            <SectioinTitle title="Mobile Banking Service" />
            <p className="text-lg lg:text-xl">
              We provide various services for online money transfers. Our
              service is the best known, most secure and reliable online
              service. We provide various services for online money transfers.
              Our service is the best known, most secure and reliable online
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingSection;
