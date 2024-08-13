import React from "react";
import { FaCalculator } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import SectioinTitle from "../section-title";

const EmiCalculator = () => {
  return (
    <div className="w-full space-y-4">
      <SectioinTitle title="EMI Calculator" />

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-full">
            <p className="text-green-600">Loan Amount (NPR)</p>
            <input
              type="number"
              placeholder="Enter Loan Amount"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
          <div className="w-full">
            <p className="text-green-600">Interest Rate (%)</p>
            <input
              type="number"
              placeholder="Enter Interest Rate"
              className="w-full h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
            />
          </div>
        </div>
        <div>
          <p className="text-green-600">Duration (In Months)</p>
          <input
            type="number"
            placeholder="Enter Duration"
            className="  h-10 rounded-full border-2 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>

      <div className="border-2 space-y-4  border-dashed p-4 rounded-md  border-green-500">
        <div className="relative inline-flex items-center border-2 border-green-500 rounded-full cursor-pointer">
          <p className="bg-green-500 text-white px-2 pr-6 py-1 rounded-xl">
            Calculate
          </p>
          <span className="absolute right-0 transform translate-x-1/2 bg-green-600 p-3 rounded-full">
            <FaCalculator className="text-white" />
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p>Monthly Payment(EMI)</p>
          <p className="text-red-500">Rs 0.00</p>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
