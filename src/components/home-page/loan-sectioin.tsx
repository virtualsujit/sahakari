"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  FaBriefcase,
  FaBuilding,
  FaLeaf,
  FaUserGraduate,
} from "react-icons/fa";
import SectioinTitle from "./section-title";
import { ChevronRight } from "lucide-react";

const LoanSection = () => {
  const data = [
    {
      icon: <FaLeaf />,
      title: "Agriculture Loan",
    },

    {
      icon: <FaUserGraduate />,
      title: "Education Loan",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Loan",
    },
    {
      icon: <FaBuilding />,
      title: "Business Loan",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-[1400px] mx-auto text-black py-6 space-y-6">
        <SectioinTitle title="Loans" />

        <p className="text-center">
          Variety of loans that will suit your needs
        </p>

        <div className="max-w-7xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className=" ">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center  h-44 w-32   bg-white  hover:text-white p-4 rounded-lg   md:basis-1/2 lg:basis-1/4 mx-4 hover:bg-[radial-gradient(#32488A,#1d2e61)]  "
                >
                  <div className=" flex flex-col gap-4  items-center justify-between ">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-xl">{item.title}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
            View All
            <ChevronRight className="inline-flex " size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanSection;
