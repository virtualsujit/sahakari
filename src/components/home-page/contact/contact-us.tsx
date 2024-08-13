import React from "react";
import SectioinTitle from "../section-title";

const ContactUs = () => {
  return (
    <div className="w-full space-y-4 px-4">
      <SectioinTitle title="Request For Callback" />

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
      <div>
        <button className="bg-green-600 text-white rounded-lg px-4 py-2 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
