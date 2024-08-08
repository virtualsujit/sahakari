import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full space-y-4 px-4">
      <div className="flex items-center justify-center gap-2 w-full">
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
        <h2 className="text-2xl">Request For Callback</h2>
        <div className="border-2 bg-[#32488A] p-1 rounded-lg w-9" />
      </div>
      <p>
        Would you like to speak to one of our financial advisers over the phone?
        Just submit your details and we’ll be in touch shortly. You can also
        email us if you would prefer.
      </p>
      <div className="flex gap-4 justify-between">
        <div className="w-full">
          <p className="text-green-600">First Name</p>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full rounded-full border-2  h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
        <div className="w-full">
          <p className="text-green-600">Last Name</p>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full rounded-full border-2  h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-between mt-4">
        <div className="w-full">
          <p className="text-green-600">Contact Number</p>
          <input
            type="text"
            name="contactNumber"
            placeholder="Enter Contact Number"
            className="w-full rounded-full border-2  h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
        <div className="w-full">
          <p className="text-green-600">Concerned Topic</p>
          <input
            type="text"
            name="concernedTopic"
            placeholder="Enter Concerned Topic"
            className="w-full rounded-full border-2  h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
