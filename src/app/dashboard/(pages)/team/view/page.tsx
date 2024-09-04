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

  const handleDelete = async (id: string, imageUrl: string) => {
    if (imageUrl) {
      const fileName = imageUrl.split("/").pop();

      console.log(fileName);

      if (fileName) {
        const { data, error: deleteError } = await supabase.storage
          .from("team")
          .remove([fileName]);

        console.log(data, deleteError, "data and error");

        if (deleteError) {
          console.error("Error deleting image:", deleteError);
          throw deleteError;
        }
      } else {
        console.error("Invalid image URL, unable to extract file name.");
      }
    }

    try {
      const response = await fetch(`/api/team`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      console.log(response);

      if (!response.ok) {
        toast.success("Failed to delete the article.");
      } else {
        // Remove the deleted member from the local state
        setTeamMembers(teamMembers.filter((member) => member.id !== id));
        toast.success("Team member deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting the article:", error);
    }
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
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
              onValueChange={(value) => setSelectedRole(value)}
              value={selectedRole}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectContent className="bg-slate-900">
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
        ) : teamMembers.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">No team members found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
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
                    onClick={() => handleDelete(member.id, member.profilePhoto)}
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
