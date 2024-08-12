import React from "react";
import Image from "next/image";

// JSON data for features and table
const featuresData = {
  features: [
    {
      title: "Cash withdraw and balance enquiry through ATM.",
    },
    {
      title: "POS Payment",
    },
    {
      title: "Mobile Payment through SCT MoCo App.",
    },
    {
      title: "Online Payment",
    },
    {
      title: "Card validity for 4 years.",
    },
  ],
};

const tableData = {
  tableData: [
    {
      perTransaction: "25,000.0",
      perDay: "25,000.0",
    },
  ],
};
const nominalCharge = {
  tableData: [
    {
      cardIssue: "Rs. 500",
      cardReIssue: "Rs. 500",
      annualRenewal: "Rs. 500",
    },
  ],
};

const Page = () => {
  return (
    <div className="max-w-[1400px] flex justify-between mx-auto text-black py-4">
      {/* Sidebar with Image */}
      <div className="w-2/6 mx-auto p-2 bg-gray-100 shadow-md sticky top-20 h-[calc(100vh-140px)]">
        <Image
          src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Achievement"
          width={900}
          height={900}
          className="h-full object-cover"
        />
      </div>

       
      <div className="p-6 text-black w-4/6">
        <div className="space-y-8">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              SCT Debit Card Service
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We are proud to announce SCT Debit Card Service to our valuable
              members for direct access to their account and perform financial
              transaction. Members can withdraw or check balance from 1149 ATMs
              in SCT Network and make payment through more than 2000 POS
              Terminals located in all over Nepal.
            </p>
          </section>

          <section className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stand-out Features:
            </h2>
            <ul className="list-disc text-green-500 pl-5 space-y-2 ">
              {featuresData.features.map((feature, index) => (
                <li key={index} className="">
                  <strong className="text-gray-500">{feature.title}:</strong>{" "}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Withdraw limits:
          </h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Maximum withdraw amount per transaction
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Maximum withdraw amount per day
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.tableData.map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.perTransaction}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.perDay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nominal Fees and Charges :
          </h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Card Issue
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Card Re-Issue
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Annual Renewal Charge
                </th>
              </tr>
            </thead>
            <tbody>
              {nominalCharge.tableData.map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.cardIssue}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.cardReIssue}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.annualRenewal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
