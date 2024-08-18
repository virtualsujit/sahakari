"use client";
import React, { useState } from "react";
import { FaCalculator } from "react-icons/fa";
import SectioinTitle from "../section-title";
import toast from "react-hot-toast";

const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [emi, setEmi] = useState<number>(0);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !duration) {
      return toast.error("Please fill all the fields");
    }
    
    const rate = interestRate / 12 / 100;
    const emiValue =
      (loanAmount * rate * Math.pow(1 + rate, duration)) /
      (Math.pow(1 + rate, duration) - 1);
    setEmi(emiValue || 0);
  };

  return (
    <div className="w-full space-y-6 max-w-4xl mx-auto">
      <SectioinTitle title="EMI Calculator" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <p className="text-green-600 mb-1">Loan Amount (NPR)</p>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              placeholder="Enter Loan Amount"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
          <div className="flex-1">
            <p className="text-green-600 mb-1">Interest Rate (%)</p>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="Enter Interest Rate"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-green-600 mb-1">Duration (In Months)</p>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            placeholder="Enter Duration"
            className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>

      <div className="border-2 space-y-4 border-dashed p-6 rounded-md border-green-500">
        <div
          onClick={calculateEMI}
          className="relative inline-flex items-center justify-center border-2 border-green-500 rounded-full cursor-pointer"
        >
          <p className="bg-green-500 text-white px-6 py-2 rounded-full">
            Calculate
          </p>
          <span className="absolute right-0 transform translate-x-1/2 bg-green-600 p-3 rounded-full">
            <FaCalculator className="text-white" />
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold">Monthly Payment (EMI)</p>
          <p className="text-red-500 text-lg">Rs {emi.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
