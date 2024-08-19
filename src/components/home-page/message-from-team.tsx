import React from "react";
import TeamCard from "../card/team-card";

const MessageFromTeam = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-4 py-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="w-full">
          <TeamCard />
        </div>
      ))}
    </div>
  );
};

export default MessageFromTeam;