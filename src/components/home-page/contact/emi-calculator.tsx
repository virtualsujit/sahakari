import React from "react";

const EmiCalculator = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 w-full mb-4">
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
        <h2 className="text-2xl">EMI Calculator</h2>
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
      </div>

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
    </div>
  );
};

export default EmiCalculator;
