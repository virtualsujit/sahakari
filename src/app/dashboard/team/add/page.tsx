"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TeamAdd = () => {
  const [formData, setFormData] = useState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    const updatedFormData = new FormData(formData);

    if (files) {
      updatedFormData.set(name, files[0]);
    } else {
      updatedFormData.set(name, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Now formData is ready to be sent to an API endpoint
    console.log("FormData ready to send:", formData);
    // API call logic here
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
              onValueChange={(value) => {
                const updatedFormData = new FormData(formData);
                updatedFormData.set("memberType", value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose type" />
              </SelectTrigger>
              <SelectContent className="bg-slate-500">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
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
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamAdd;
