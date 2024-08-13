"use client";
import CountUp from "react-countup";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaHandshakeAngle, FaPiggyBank, FaUserGroup } from "react-icons/fa6";
import { GiGreekTemple } from "react-icons/gi";
import { IoPieChartSharp } from "react-icons/io5";
import SectioinTitle from "./section-title";

const InstitutionalProfile = () => {
  const data = [
    {
      text: "Total Members",
      number: 2376,
      icon: <FaUserGroup />,
    },
    {
      text: "Share Capital",
      number: 56806650,
      icon: <BiSolidBuildingHouse />,
    },
    {
      text: "Reserved Fund",
      number: 50013288,
      icon: <IoPieChartSharp />,
    },
    {
      text: "Deposit",
      number: 443405664,
      icon: <FaPiggyBank />,
    },
    {
      text: "Loan",
      number: 475822782,
      icon: <FaHandshakeAngle />,
    },
    {
      text: "Total Assets",
      number: 789564135,
      icon: <GiGreekTemple />,
    },
  ];

  return (
    <div className="text-black p-4  max-w-[1400px] mx-auto">
      <SectioinTitle title="Institutional Profile" />

      <p className="font-semibold">Data of fiscal year 2079/80</p>

      <div className="flex gap-6 items-center justify-center mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-green-600 p-5 rounded-md w-52"
          >
            <div className="flex flex-col justify-center gap-2 items-center">
              <div className="text-4xl text-green-500">{item.icon}</div>
              <div className="text-lg font-semibold text-green-600">
                {item.text}
              </div>
              <div className="text-xl text-green-800">
                <CountUp
                  end={item.number}
                  separator=","
                  duration={1}
                  enableScrollSpy={true}
                  scrollSpyDelay={0.2}
                  scrollSpyOnce={false}
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
