import {
  ArrowBigRight,
  ArrowRight,
  ChevronRight,
  TabletSmartphone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaAtom, FaSms } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";
import PhotoCarousel from "./photo-carousel";
import { BiRightArrow } from "react-icons/bi";

const HomeHeroSection = () => {
  const services = [
    {
      icon: <FaAtom size={35} />,
      title: "ATM Service",
    },
    {
      icon: <TabletSmartphone size={35} />,
      title: "Mobile Banking",
    },
    {
      icon: <MdOutlineQrCode2 size={35} />,
      title: "QR Code Payment",
    },
    {
      icon: <FaSms size={35} />,
      title: "SMS Banking",
    },
  ];

  const staticData: {
    id: number;
    url: string;
    alt: string;
  }[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Our Board",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Our marker",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Our Ink",
    },
  ];
  return (
    <div className="flex text-black gap-4  max-w-[1400px] mx-auto">
      <div className="w-4/6 p-0 m-0">
        <PhotoCarousel data={staticData} />
      </div>
      <div className="w-2/6 mx-auto p-4 space-y-5">
        <div className="grid grid-cols-2 gap-y-3 place-content-start place-items-start ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 py-3 w-48 items-center justify-center p-2 text-white rounded-xl  "
              style={{ background: "radial-gradient(#32488A, #1d2e61)" }}
            >
              <div className="text-4xl text-white">{service.icon}</div>
              <div className="text-sm">{service.title}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  items-center justify-centertext-center space-y-4 ">
          <Image
            src="/images/Home/account.svg"
            alt="Online Account Opening"
            width={1920}
            height={1080}
            className="object-contain h-44 mx-auto  my-2"
          />
          <h2 className="text-2xl font-semibold mb-1">
            Online Account Opening
          </h2>
          <p className="mb-1 text-sm line-clamp-2">
            We provide various services for online money transfers. Our service
            is the best known, most reliable, and most secure service in the
            world.
          </p>
          <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-full flex items-center">
            Get Started
            <ChevronRight className="inline-flex " size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
