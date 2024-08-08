import ContactSection from "@/components/home-page/contact/contact-section";
import HomeHeroSection from "@/components/home-page/hero-section";
import InstitutionalProfile from "@/components/home-page/Institutional-profile";
import LoanSection from "@/components/home-page/loan-sectioin";
import MessageFromTeam from "@/components/home-page/message-from-team";
import ServiceSection from "@/components/home-page/service-section";
import VisioinSection from "@/components/home-page/vision-sectioin";

export default function Home() {
  return (
    <div className="min-h-screen px-4 pb-4  space-y-4">
      <HomeHeroSection />
      <VisioinSection />
      <MessageFromTeam />
      <ServiceSection />
      <InstitutionalProfile />
      <LoanSection />
      <ContactSection />
    </div>
  );
}
