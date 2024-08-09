import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsSection from "./news-section";
import { FaMoneyCheckAlt, FaPiggyBank } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import DownloadSection from "./download-section";

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 w-full text-black py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <p className="border-2 bg-[#32488A] p-1 rounded-full w-9" />
          <h2 className="text-2xl">Presenting Our Services</h2>
          <p className="border-2 bg-[#32488A] p-1 rounded-full w-9" />
        </div>

        <div className="flex justify-between gap-4  mt-4">
          <div className="w-1/2 py-4 ">
            <Tabs
              defaultValue="news"
              className="w-full  shadow-white bg-white  "
            >
              <TabsList className="bg-[#32488A] w-full flex">
                <TabsTrigger
                  value="news"
                  className="flex-1 text-center text-white"
                >
                  News
                </TabsTrigger>
                <TabsTrigger
                  value="notice"
                  className="flex-1 text-center text-white"
                >
                  Notice
                </TabsTrigger>
                <TabsTrigger
                  value="download"
                  className="flex-1 text-center text-white"
                >
                  Download
                </TabsTrigger>
              </TabsList>
              <TabsContent value="news" className=" overflow-y-auto bar p-2">
                <NewsSection />
              </TabsContent>
              <TabsContent value="notice" className="h-96">
                Change your password here.
              </TabsContent>
              <TabsContent value="download" className="">
                <DownloadSection />
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-1/2 py-4">
            <div className="flex items-center p-4 ">
              {/* Icon Section */}
              <div className="bg-green-700 text-white p-4 rounded-full flex items-center justify-center">
                <FaPiggyBank className="text-3xl" />
              </div>

              {/* Content Section */}
              <div className="ml-4">
                <h2 className="text-green-700 text-xl font-semibold">
                  Deposit
                </h2>
                <p className="text-gray-600">
                  Royal Savings offers a wide range of deposit products that
                  caters to your requirement. In order to expand community
                  participation. Royal Savings offers a wide range of deposit
                  products that caters to your requirement. In order to expand
                  community participation.
                </p>

                <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
                  Read More <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
            <div className="flex items-center p-4 ">
              {/* Icon Section */}
              <div className="bg-green-700 text-white p-4 rounded-full flex items-center justify-center">
                <GiReceiveMoney className="text-3xl" />
              </div>

              {/* Content Section */}
              <div className="ml-4">
                <h2 className="text-green-700 text-xl font-semibold">Loan</h2>
                <p className="text-gray-600">
                  In cooperation with various consumer shops, discount cards are
                  being provided to its members to save them from the rising
                  inflation.
                </p>

                <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
                  Read More <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
            <div className="flex items-center p-4 ">
              {/* Icon Section */}
              <div className="bg-green-700 text-white p-4 rounded-full flex items-center justify-center">
                <FaMoneyCheckAlt className="text-3xl" />
              </div>

              {/* Content Section */}
              <div className="ml-4">
                <h2 className="text-green-700 text-xl font-semibold">
                  Remittance
                </h2>
                <p className="text-gray-600">
                  We provide various services for online money transfers. Our
                  service is the best known, most secure and reliable online
                  service. We can deal with IME, IME, Himal, Western Union, City
                  Express, GME, Moneygram, Samsara and Muktinath
                </p>

                <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
                  Read More <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
