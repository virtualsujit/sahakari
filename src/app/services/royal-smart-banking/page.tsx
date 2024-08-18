import React from "react";
import Image from "next/image";

// JSON data for features and table
const featuresData = {
  features: [
    {
      title: "Account Information",
      description: "Balance Enquiry, Mini Statement",
    },
    {
      title: "Fund Transfer",
      description: "Between accounts maintained at the cooperative",
    },
    {
      title: "Cooperative to Bank Transfer",
      description: "(*Charges Apply)",
    },
    {
      title: "Bank to Cooperative Transfer",
      description:
        "User must have an active mobile banking or internet banking service subscription of the respective bank",
    },
    {
      title: "Recharge and Top-up",
      description:
        "NTC Prepaid, NTC Postpaid, Ncell, PSTN Landline, Smartcell, UTL, CDMA",
    },
    {
      title: "TV and Internet Bill Payment",
      description: "",
    },
    {
      title: "Electricity and Water Bill Payment",
      description: "",
    },
    {
      title: "Insurance Premium Payment",
      description: "",
    },
    {
      title: "Airline and Movie Ticketing",
      description: "",
    },
    {
      title: "Wallet Load",
      description: "Esewa, IME Pay, Prabhu Pay, Khalti",
    },
    {
      title: "QR Merchant Payment",
      description: "",
    },
  ],
};

const tableData = {
  tableData: [
    {
      service: "Bank Transfer",
      perTransaction: "1,00,000.0",
      perDay: "2,00,000.0",
      perMonth: "20,00,000.0",
    },
    {
      service: "Wallet Load",
      perTransaction: "25,000.0",
      perDay: "25,000.0",
      perMonth: "3,00,000.0",
    },
  ],
};
const serviceChargeBank = {
  tableData: [
    {
      amount: "Upto Rs. 500	",
      charges: "Rs. 10",
    },
    {
      amount: "Rs. 501 - Rs. 1000",
      charges: "Rs. 20",
    },
    {
      amount: "Rs. 1001 - Rs. 5000",
      charges: "Rs. 50",
    },
    {
      amount: "Rs. 5001 - Rs. 10000",
      charges: "Rs. 100",
    },
    {
      amount: "Rs. 10001 - Rs. 25000",
      charges: "Rs. 200",
    },
  ],
};

const Page = () => {
  return (
    <div className="max-w-[1400px] flex flex-col lg:flex-row justify-between mx-auto text-black py-4">
      {/* Sidebar with Image */}
      <div className="lg:w-2/6 mx-auto p-2 bg-gray-100 shadow-md lg:sticky lg:top-20 lg:h-[calc(100vh-140px)]">
        <Image
          src="https://c8.alamy.com/comp/2C47WGP/creative-abstract-modern-corporate-business-vertical-roll-up-banner-design-template-vector-illustration-concept-exhibition-advertising-presentation-2C47WGP.jpg"
          alt="Achievement"
          width={900}
          height={900}
          className="max-h-96 lg:h-full lg:max-h-full object-contain lg:object-cover "
        />
      </div>

      {/* Main Content */}
      <div className="p-6 text-black lg:w-4/6">
        <div className="space-y-8">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Royal Smart Banking
            </h1>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              Step into the digital world with our fully digital and secured
              mobile banking application available on Android and iOS platforms
              for our valued members. The application allows users to securely
              operate their accounts from “anywhere, anytime.”
            </p>
          </section>

          {/* Stand-out Features Rendered from JSON */}
          <section className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Stand-out Features:
            </h2>
            <ul className="list-disc text-green-500 pl-5 space-y-2 ">
              {featuresData.features.map((feature, index) => (
                <li key={index} className="">
                  <strong className="text-gray-500">{feature.title}:</strong>{" "}
                  <span className="text-gray-500">
                    {" "}
                    {feature.description ? feature.description : ""}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Transaction Limits
          </h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Services
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Per Transaction
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Per Day
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Per Month
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.tableData.map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.service}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.perTransaction}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.perDay}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.perMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-red-500 my-1">
            Note:Transfer limit is inclusive of service charge.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Service Charge for bank transfer:
          </h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Amount
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceChargeBank.tableData.map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.amount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {row.charges}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="my-1">
            Service charge is subject to vary time to time.
          </p>
          <p className="text-red-500 my-1">
            For more information contact our office near you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
