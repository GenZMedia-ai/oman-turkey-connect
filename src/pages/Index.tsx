import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-tajawal' : 'font-inter'} ${language === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <CountdownSection language={language} />
        <AboutSection language={language} />
        <ProgramSection language={language} />
        <RegistrationSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
