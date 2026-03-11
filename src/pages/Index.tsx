import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LegacySection from "@/components/LegacySection";
import AgrohaSection from "@/components/AgrohaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LegacySection />
      <AgrohaSection />
      <Footer />
    </div>
  );
};

export default Index;
