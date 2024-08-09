"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LoanSection = () => {
  const data = [
    {
      icon: "🔥",
      title: "Agriculture Loan",
    },
    {
      icon: "🔥",
      title: "Education Loan",
    },
    {
      icon: "🔥",
      title: "Education Loan",
    },
    {
      icon: "🔥",
      title: "Education Loan",
    },
    {
      icon: "🔥",
      title: "Home Loan",
    },
    {
      icon: "🔥",
      title: "Business Loan",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-[1400px] mx-auto text-black py-6 space-y-6">
        <div className="flex items-center justify-center gap-2">
          <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
          <h2 className="text-2xl">Loans</h2>
          <div className="border-2 bg-[#32488A] p-1 rounded-xl w-9" />
        </div>
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
                  className="flex items-center justify-center  h-44 w-32   bg-white hover:bg-[#32488A] hover:text-white p-4 rounded-lg   md:basis-1/2 lg:basis-1/4 mx-4  "
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
          <p className="bg-green-600 rounded-full text-white px-2   text-center">
            view all
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanSection;
