import React from "react";
import locationIcon from "../assets/icons/Address.svg";
import emailIcon from "../assets/icons/Email.svg";
import phoneIcon from "../assets/icons/phone.svg";
import visaIcon from "../assets/icons/Visa.svg";
import mastercardIcon from "../assets/icons/MasterCard.svg";
import paypalIcon from "../assets/icons/paypal.svg";
import applePayIcon from "../assets/icons/applepay.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122B3E] text-white p-6 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Contact Information */}
        <div className="flex flex-col space-y-4 md:space-y-2 text-left">
          <div className="flex items-center space-x-2">
            <img
              src={locationIcon}
              alt="Location"
              className="w-6 h-6 md:w-5 md:h-5"
            />
            <p className="text-sm md:text-base">Austin, TX</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={emailIcon}
              alt="Email"
              className="w-6 h-6 md:w-5 md:h-5"
            />
            <p className="text-sm md:text-base">example@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-6 h-6 md:w-5 md:h-5"
            />
            <p className="text-sm md:text-base">+1 234 343 4323 3432</p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-lg w-full md:w-3/4"
          />
          <button className="bg-[#1E3A8A] text-white py-2 px-4 rounded-lg mt-2 md:mt-0">
            Subscribe
          </button>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
          <img
            src={paypalIcon}
            alt="PayPal"
            className="w-8 h-8 md:w-8 md:h-8"
          />
          <img src={visaIcon} alt="Visa" className="w-8 h-8 md:w-8 md:h-8" />
          <img
            src={mastercardIcon}
            alt="MasterCard"
            className="w-8 h-8 md:w-8 md:h-8"
          />
          <img
            src={applePayIcon}
            alt="Apple Pay"
            className="w-8 h-8 md:w-8 md:h-8"
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs md:text-sm">© 2024 Mom's Keepsakes</p>
      </div>
    </footer>
  );
};

export default Footer;
