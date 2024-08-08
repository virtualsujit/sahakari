"use client";
import React, { useEffect, useState } from "react";

const NoticeBar = () => {
  const data = [
    "offer offer save up to 25% on fixed deposit",
    "get 10% discount on loan interest rate",
    "get 5% discount on remittance charge",
    "get 3% more interest on child saving account",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFadeClass("fade-in");
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data.length]);

  return (
    <div className="py-1 px-4 bg-red-600 text-white">
      <div>
        <p className={`text-center font-bold text-sm ${fadeClass}`}>
          <span className="animate-pulse">🔥</span> {data[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default NoticeBar;
