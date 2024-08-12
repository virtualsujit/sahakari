import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

// JSON data
const contactData = {
  imageSrc:
    "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  contacts: [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "Shuklagandaki Municipality -4, Dulegaunda, Tanahu",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+977-65-414490",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@royalcooperative.com",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      value: "https://www.facebook.com/pokhararoyalsaccos",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "https://www.instagram.com/pokhararoyalsaccos",
    },
  ],
};

const ContactComponents = () => {
  return (
    <div className="mx-auto p-3 flex gap-8 items-start justify-between bg-white">
      {/* Image Section */}
      <div className="w-1/2">
        <Image
          src={contactData.imageSrc}
          alt="Pokhara Royal Cooperative Society Limited"
          width={1000}
          height={1000}
          className="rounded-lg h-96 w-full object-cover"
        />
      </div>

      {/* Contact Information Section */}
      <div className="w-1/2 space-y-3">
        {contactData.contacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-green-700 text-white p-4 rounded-full flex items-center justify-center">
              <contact.icon className="" />
            </div>
            <div>
              {contact.label === "Facebook" || contact.label === "Instagram" ? (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-800">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactComponents;
