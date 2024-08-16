import React from "react";
import { FaCalculator } from "react-icons/fa";
import SectioinTitle from "../section-title";

const EmiCalculator = () => {
  return (
    <div className="w-full space-y-6 max-w-4xl mx-auto">
      <SectioinTitle title="EMI Calculator" />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <p className="text-green-600 mb-1">Loan Amount (NPR)</p>
            <input
              type="number"
              placeholder="Enter Loan Amount"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
          <div className="flex-1">
            <p className="text-green-600 mb-1">Interest Rate (%)</p>
            <input
              type="number"
              placeholder="Enter Interest Rate"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-green-600 mb-1">Duration (In Months)</p>
          <input
            type="number"
            placeholder="Enter Duration"
            className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>

      <div className="border-2 space-y-4 border-dashed p-6 rounded-md border-green-500">
        <div className="relative inline-flex items-center justify-center border-2 border-green-500 rounded-full cursor-pointer">
          <p className="bg-green-500 text-white px-6 py-2 rounded-full">
            Calculate
          </p>
          <span className="absolute right-0 transform translate-x-1/2 bg-green-600 p-3 rounded-full">
            <FaCalculator className="text-white" />
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold">Monthly Payment (EMI)</p>
          <p className="text-red-500 text-lg">Rs 0.00</p>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
