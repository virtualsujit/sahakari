import ContactUs from "./contact-us";
import EmiCalculator from "./emi-calculator";

const ContactSection = () => {
  return (
   <div className="bg-gray-100 ">
     <div className=" max-w-[1400px] mx-auto flex flex-col md:flex-row items-start py-8 text-black w-full ">
      <div className="w-full md:w-6/12  ">
        <ContactUs />
      </div>
      <div className="w-full md:w-1/12 flex justify-center py-8 md:py-0">
        <div className="border-l-4 border-gray-500 rounded-lg h-96"></div>
      </div>
      <div className="w-full md:w-5/12  ">
        <EmiCalculator />
      </div>
    </div>
   </div>
  );
};

export default ContactSection;
