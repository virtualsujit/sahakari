"use client";
import React, { useEffect, useState } from "react";
import { Edit, Trash } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamDataT {
  id: number;
  name: string;
  position: string;
  photo: string;
}

const TeamView = () => {
  const teamData: TeamDataT[] = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      position: "Product Manager",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Alice Smith",
      position: "Designer",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  const [teamMembers, setTeamMembers] = useState<TeamDataT[]>([]);

  useEffect(() => {
    setTeamMembers(teamData);
  }, []);

  const handleDelete = async (id: number) => {
    console.log("Delete member with ID:", id);
    setTeamMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== id)
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-2 items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-center  w-1/2 ">Team Members</h2>

        <Select name="memberType">
          <SelectTrigger className="w-full">
            <SelectValue placeholder=" Choose Our Team Category" />
          </SelectTrigger>
          <SelectContent className="bg-slate-500">
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out relative"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              {member.name}
            </h3>
            <p className="text-gray-700 text-center">{member.position}</p>
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleDelete(member.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;
