"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const NoticeBar = () => {
  const data = [
    "offer offer save up to 25% on fixed deposit",
    "get 10% discount on loan interest rate",
    "get 5% discount on remittance charge",
    "get 3% more interest on child saving account",
  ];

  return (
    <div className="py-1.5   bg-red-600 text-white px-4">
      <div className="max-w-[1400px] px-4 mx-auto overflow-hidden">
        <div className="marquee-wrapper px-4">
          <div className="marquee">
            {data.map((item, index) => (
              <Link
                href={"/"}
                key={index}
                className="inline-block gap-4 whitespace-nowrap px-4"
              >
                <span className="animate-pulse">
                  {" "}
                  <ArrowRight className="inline-flex" />
                </span>{" "}
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
