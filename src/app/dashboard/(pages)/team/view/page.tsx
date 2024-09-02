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
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      setError("");

      try {
        const queryParam = selectedRole ? `?memberType=${selectedRole}` : "";
        const response = await fetch(`/api/team${queryParam}`);

        if (!response.ok) {
          throw new Error("Failed to fetch team members.");
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (err: any) {
        console.error("Error fetching team members:", err);
        setError(err.message || "Something went wrong.");
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
          <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
          <div className="mt-4 sm:mt-0 w-full sm:w-64">
            <Select
              onValueChange={(value) => setSelectedRole(value)}
              value={selectedRole}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent className="bg-slate-900  ">
                  {role.map((item) => (
                    <SelectItem
                      key={item.id}
                      value={item.value}
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
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading team members...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500">{error}</p>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">No team members found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={member.profilePhoto || "/default-profile.png"}
                    alt={`${member.fullName} photo`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.fullName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.contactNumber}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">{member.email}</p>
                  <span className="mt-2 inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded">
                    {member.memberType.charAt(0).toUpperCase() +
                      member.memberType.slice(1)}
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
