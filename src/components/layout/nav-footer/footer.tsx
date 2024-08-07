import React from 'react';

const Footer = () => {
  return (
    <div className=" text-black ">
      <div className="container mx-auto px-4">
        <div className="footer-info-wrapper">
          <div className="row flex flex-wrap -mx-4">
            <div className="footer-grid-childs w-full md:w-1/4 px-4 mb-6 md:mb-0">
              {/* contact info::begin */}
              <h1 className="text-xl font-bold mb-4">Head Office</h1>
              <div className="contact-info">
                <ul>
                  <li className="mb-2"><i className="fa fa-map-marker-alt mr-2"></i>Buddha Chowk, Kaski</li>
                  <li className="mb-2"><i className="fa fa-phone mr-2"></i>+977-61-588833, 587833</li>
                  <li><i className="fa fa-envelope mr-2"></i>info@royalcooperative.com</li>
                </ul>
              </div>
              <div className="footer-social-links flex space-x-4 mt-4">
                <a href="https://www.facebook.com/pokhararoyalsaccos">
                  <div className="footer-social-icon text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/pokhararoyalsaccos">
                  <div className="footer-social-icon text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="https://www.youtube.com/pokhararoyalsaccos">
                  <div className="footer-social-icon text-red-600">
                    <i className="fab fa-youtube"></i>
                  </div>
                </a>
              </div>
            </div>
            {/* contact info::ends */}
            <div className="footer-grid-childs w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <div className="quicl-links-wrapper">
                <ul className="space-y-2">
                  <li><a href="/" className="text-blue-500 hover:underline">Home</a></li>
                  <li><a href="/aboutus" className="text-blue-500 hover:underline">Our Profile</a></li>
                  <li><a href="https://royalcooperative.com/team/1" className="text-blue-500 hover:underline">Board of Directors</a></li>
                  <li><a href="https://royalcooperative.com/team/2" className="text-blue-500 hover:underline">Account Supervision Committee</a></li>
                  <li><a href="https://royalcooperative.com/team/3" className="text-blue-500 hover:underline">Advisory Council</a></li>
                  <li><a href="https://royalcooperative.com/team/4" className="text-blue-500 hover:underline">Top Management</a></li>
                  <li><a href="https://royalcooperative.com/team/5" className="text-blue-500 hover:underline">Staff Members</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-grid-childs w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <div className="quicl-links-wrapper">
                <ul className="space-y-2">
                  <li><a href="/services/savings" className="text-blue-500 hover:underline">Savings</a></li>
                  <li><a href="/services/loans" className="text-blue-500 hover:underline">Loans</a></li>
                  <li><a href="/services/remittance" className="text-blue-500 hover:underline">Remittance</a></li>
                  <li><a href="/services/royal-smart-banking" className="text-blue-500 hover:underline">Smart Banking</a></li>
                  <li><a href="/services/sct-debit-card" className="text-blue-500 hover:underline">ATM Services</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-grid-childs w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <div className="quicl-links-wrapper">
                <ul className="space-y-2">
                  <li><a href="/reports" className="text-blue-500 hover:underline">Report</a></li>
                  <li><a href="/news" className="text-blue-500 hover:underline">News</a></li>
                  <li><a href="/downloads" className="text-blue-500 hover:underline">Download</a></li>
                  <li><a href="/contact-us" className="text-blue-500 hover:underline">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-grid-child w-full px-4">
              <div className="footer-facebook-feed">
                {/* Additional content can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
