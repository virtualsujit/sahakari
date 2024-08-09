import React from "react";
import TeamCard from "../card/team-card";

const MessageFromTeam = () => {
  return (
    <div className="grid grid-cols-3 gap-4 place-content-center  max-w-[1400px] mx-auto place-items-center ">
      {" "}
      {[1, 2, 3].map((item) => (
        <div key={item}>
          <TeamCard />
        </div>
      ))}
    </div>
  );
};

export default MessageFromTeam;
