import { FaFacebook, FaInstagram } from "react-icons/fa";
import React from "react";

const contactInfo = [
  { icon: "fa-map-marker-alt", text: "Buddha Chowk, Kaski" },
  { icon: "fa-phone", text: "+977-61-588833, 587833" },
  { icon: "fa-envelope", text: "info@royalcooperative.com" },
];

const Home = [
  { href: "/", text: "Home" },
  { href: "/aboutus", text: "Our Profile" },
  { href: "https://royalcooperative.com/team/1", text: "Board of Directors" },
  {
    href: "https://royalcooperative.com/team/2",
    text: "Account Supervision Committee",
  },
  { href: "https://royalcooperative.com/team/3", text: "Advisory Council" },
  { href: "https://royalcooperative.com/team/4", text: "Top Management" },
  { href: "https://royalcooperative.com/team/5", text: "Staff Members" },
];

const Savings = [
  { href: "/services/savings", text: "Savings" },
  { href: "/services/loans", text: "Loans" },
  { href: "/services/remittance", text: "Remittance" },
  { href: "/services/royal-smart-banking", text: "Smart Banking" },
  { href: "/services/sct-debit-card", text: "ATM Services" },
];

const Reports = [
  { href: "/reports", text: "Report" },
  { href: "/news", text: "News" },
  { href: "/downloads", text: "Download" },
  { href: "/contact-us", text: "Contact Us" },
];

const Footer = () => {
  return (
    <div className="text-white py-4 bg-[linear-gradient(90deg,_rgba(10,5,103,1)_0%,_rgba(35,35,173,1)_50%,_rgba(10,5,103,1)_100%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h1 className="text-xl font-bold mb-4">Head Office</h1>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="mb-2">
                  <i className={`fa ${info.icon} mr-2`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
            <div className="flex space-x-2 mt-1 ml-2 ">
              <a href="https://www.facebook.com/thoplo" className="shadow-md">
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.instagram.com/thoplo"
                className="shadow-md text-red-500"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          {[Home, Savings, Reports].map((links, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
