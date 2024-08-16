import React from "react";
import SectioinTitle from "../section-title";

const ContactUs = () => {
  return (
    <div className="w-full space-y-6 px-4 max-w-4xl mx-auto">
      <SectioinTitle title="Request For Callback" />

      <p>
        Would you like to speak to one of our financial advisers over the phone?
        Just submit your details, and we’ll be in touch shortly. You can also
        email us if you would prefer.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-green-600 mb-1">First Name</p>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full rounded-full border-2 h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
        <div className="flex-1">
          <p className="text-green-600 mb-1">Last Name</p>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full rounded-full border-2 h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-green-600 mb-1">Contact Number</p>
          <input
            type="text"
            name="contactNumber"
            placeholder="Enter Contact Number"
            className="w-full rounded-full border-2 h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
        <div className="flex-1">
          <p className="text-green-600 mb-1">Concerned Topic</p>
          <input
            type="text"
            name="concernedTopic"
            placeholder="Enter Concerned Topic"
            className="w-full rounded-full border-2 h-10 px-4 border-green-600 focus:outline-none focus:shadow-md shadow-green-600"
          />
        </div>
      </div>

      <div className="text-center">
        <button className="bg-green-600 text-white rounded-lg px-6 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
