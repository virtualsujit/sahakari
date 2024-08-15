"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsSection from "./news-section";
import { FaMoneyCheckAlt, FaPiggyBank } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import DownloadSection from "./download-section";
import { motion } from "framer-motion";
import SectioinTitle from "../section-title";
import NoticeSection from "./notice-section";
import { ChevronRight } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <FaPiggyBank className="text-3xl" />,
      title: "Deposit",
      description:
        "Royal Savings offers a wide range of deposit products that caters to your requirement. In order to expand community participation.",
    },
    {
      icon: <GiReceiveMoney className="text-3xl" />,
      title: "Loan",
      description:
        "In cooperation with various consumer shops, discount cards are being provided to its members to save them from the rising inflation.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl" />,
      title: "Remittance",
      description:
        "We provide various services for online money transfers. Our service is the best known, most secure and reliable online service.",
    },
  ];

  const rightLeftAnimation = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-100 w-full text-black py-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <SectioinTitle title="Presenting Our Services" />
        <div className="flex justify-between gap-4 mt-4">
          <div className="w-1/2 py-4">
            <Tabs defaultValue="news" className="w-full shadow-white bg-white">
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
              <TabsContent value="news" className=" p-2">
                <NewsSection />
              </TabsContent>
              <TabsContent value="notice" className="h-96  p-2 ">
                <NoticeSection />
              </TabsContent>
              <TabsContent value="download" className="p-2  max-h-[450px]">
                <DownloadSection />
              </TabsContent>
            </Tabs>
          </div>
          <div className="w-1/2 py-4 flex flex-col gap-5">
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4"
                variants={rightLeftAnimation}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <div className="bg-green-700 text-white p-4 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h2 className="text-green-700 text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                  <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
                    Read More
                    <ChevronRight className="inline-flex " size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
