"use client";
import CountUp from 'react-countup';

const InstitutionalProfile = () => {
  const data = [
    {
      text: "Total Members",
      number: 2376,
      icon: "👥", // Example icon, you can choose a more relevant one
    },
    {
      text: "Share Capital",
      number: 56806650,
      icon: "💰", // Example icon
    },
    {
      text: "Reserved Fund",
      number: 50013288,
      icon: "🏦", // Example icon
    },
    {
      text: "Deposit",
      number: 443405664,
      icon: "🏧", // Example icon
    },
    {
      text: "Loan",
      number: 475822782,
      icon: "📉", // Example icon
    },
    {
      text: "Total Assets",
      number: 789564135,
      icon: "📊", // Example icon
    },
  ];

  return (
    <div className="text-black p-4">
      <div className="flex items-center justify-center gap-2">
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
        <h2 className="text-2xl">Institutional Profile</h2>
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
      </div>
      <p className="font-semibold">Data of fiscal year 2079/80</p>

      <div className="flex gap-4 items-center justify-center mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-green-600 p-4 rounded-md w-44"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="text-4xl text-blue-500">{item.icon}</div>
              <div className="text-lg font-semibold">{item.text}</div>
              <div className="text-xl">
                <CountUp
                  end={item.number}
                  separator=","
                  duration={3}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionalProfile;
