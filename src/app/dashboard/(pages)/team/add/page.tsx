"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { role } from "@/data/role";
import { supabase } from "@/lib/supabase/client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";

const TeamAdd = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    const currentFormData = formData || new FormData();
    if (files) {
      currentFormData.set(name, files[0]);
    } else {
      currentFormData.set(name, value);
    }
    setFormData(currentFormData);
  };

  const handleSelectChange = (name: string, value: string) => {
    const currentFormData = formData || new FormData();
    currentFormData.set(name, value);
    setFormData(currentFormData); // Set the updated form data
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const currentFormData = formData || new FormData();

      const file = currentFormData.get("profilePhoto") as File | null;
      let imageUrl = "";
      if (file) {
        const fileName = `${v4()}-${file.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from("Team")
          .upload(fileName, file);
        if (uploadError) {
          toast.error("Error uploading file");
        }
        const { data: publicUrlData } = supabase.storage
          .from("Team")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      const fullName = currentFormData.get("fullName") as string;
      const position = currentFormData.get("position") as string;
      const memberType = currentFormData.get("memberType") as string;
      const contactNumber = currentFormData.get("contactNumber") as string;
      const email = currentFormData.get("email") as string;

      const teamMemberData = {
        fullName,
        position,
        memberType,
        contactNumber,
        email,
        profilePhoto: imageUrl,
      };

      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(teamMemberData),
      });

      if (!response.ok) {
        toast.error("Failed to save team member data.");
      }
      toast.success("Team member added successfully!");
    } catch (error) {
      toast.error("Error saving team member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-900 ">
        <h2 className="text-2xl font-bold mb-6">Add Team Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Select Member Type
            </label>
            <Select
              name="memberType"
              onValueChange={(value) => handleSelectChange("memberType", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose type" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900  ">
                {role.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.title}
                    className="hover:bg-green-300 rounded-md cursor-pointer"
                  >
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter full name"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Position</label>
            <input
              type="text"
              name="position"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter position"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter  contact number"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">E mail</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter  email"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Profile Photo
            </label>
            <input
              type="file"
              name="profilePhoto"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 px-4 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamAdd;
