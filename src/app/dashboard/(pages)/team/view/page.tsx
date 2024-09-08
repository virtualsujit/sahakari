"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { role } from "@/data/role";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase/client";
import { Cross1Icon } from "@radix-ui/react-icons";
import { handleDelete } from "@/utils/delete-data";
import DashboardLoader from "@/components/dashboard/dashboard-loader";

interface TeamMember {
  id: string;
  fullName: string;
  position: string;
  memberType: string;
  profilePhoto: string;
  contactNumber: string;
  email: string;
}

const TeamList = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      try {
        const queryParam = selectedRole ? `?memberType=${selectedRole}` : "";
        const response = await fetch(`/api/team${queryParam}`);
        if (!response.ok) {
          toast.error("Failed to fetch team members.");
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (err: any) {
        toast.error("Error fetching team members:");
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, [selectedRole]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Team Members
          </h1>
          <div className="mt-4 sm:mt-0 w-full sm:w-64">
            <Select
              onValueChange={(title) => setSelectedRole(title)}
              value={selectedRole}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Get team information by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent className="bg-slate-900">
                  {role.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.title}
                      className="hover:bg-green-300 rounded-md cursor-pointer"
                    >
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <DashboardLoader />
        ) : teamMembers.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">No team members found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamMembers?.map((member) => (
              <div
                key={member.id}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.profilePhoto || "/default-profile.png"}
                    alt={`${member.fullName} photo`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform transform hover:scale-110"
                  />
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    onClick={() =>
                      handleDelete(
                        member.id,
                        member.profilePhoto,
                        "team",
                        "/api/team"
                      )
                    }
                  >
                    <Cross1Icon className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                    Name: {member.fullName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Position:</span>{" "}
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Contact:</span>{" "}
                    {member.contactNumber}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Email:</span> {member.email}
                  </p>
                  <span className="mt-2 inline-block px-2 py-1 text-xs sm:text-sm text-white bg-blue-500 rounded-full">
                    {member.memberType
                      .charAt(0)
                      .toUpperCase()
                      .replace("-", " ") +
                      member.memberType.slice(1).replace("-", " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamList;
