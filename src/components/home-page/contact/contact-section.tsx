import ContactUs from "./contact-us";
import EmiCalculator from "./emi-calculator";

const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 px-4 lg:flex-row items-start text-black w-full">
        <div className="w-full lg:w-6/12">
          <ContactUs />
        </div>
        <div className="hidden lg:flex justify-center py-8">
          <div className="border-l-4 border-gray-500 rounded-lg h-96"></div>
        </div>
        <div className="w-full lg:w-5/12">
          <EmiCalculator />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
