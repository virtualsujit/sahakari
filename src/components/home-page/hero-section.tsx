import Image from "next/image";
import React from "react";
import { FaAtom } from "react-icons/fa";

const HomeHeroSection = () => {
  const services = [
    {
      icon: <FaAtom />,
      title: "ATM Service",
    },
    {
      icon: <FaAtom />,
      title: "Mobile Banking",
    },
    {
      icon: <FaAtom />,
      title: "QR Code Payment",
    },
    {
      icon: <FaAtom />,
      title: "SMS Banking",
    },
  ];

  return (
    <div className="flex text-black">
      <div className="w-4/6  ">
        <Image
          src="https://images.unsplash.com/photo-1598721987126-0e7bee3ba71f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
          width={1920}
          height={1080}
          className="object-cover h-full"
        />
      </div>
      <div className="w-2/6 p-4">
        <div className="grid grid-cols-2 gap-4 mb-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 items-center justify-center p-5 text-white rounded-md bg-[#32488A] " 
            >
              <div className="text-4xl text-blue-500">{service.icon}</div>
              <div className="text-xl">{service.title}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
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
          <p className="mb-1 text-sm">
            We provide various services for online money transfers. Our service
            is the best known, most reliable, and most secure service in the
            world.
          </p>
          <button className="px-4 py-2 font-bold text-white bg-blue-600 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
