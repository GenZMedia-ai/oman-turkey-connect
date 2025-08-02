import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Download, Users } from "lucide-react";
import muscatHero from "@/assets/muscat-hero.jpg";

interface HeroSectionProps {
  language: 'ar' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const isRTL = language === 'ar';

  const content = {
    ar: {
      title: "الملتقى العماني التركي",
      subtitle: "تعزيز الشراكات الاقتصادية والثقافية",
      date: "15-17 ديسمبر 2025",
      location: "مركز عُمان للمؤتمرات والمعارض",
      registerBtn: "سجل الآن",
      downloadBtn: "تحميل البروشور",
      description: "منصة استراتيجية لتعزيز العلاقات الاقتصادية والتجارية بين البلدين الشقيقين"
    },
    en: {
      title: "Oman-Turkey Forum",
      subtitle: "Strengthening Economic and Cultural Partnerships",
      date: "December 15-17, 2025",
      location: "Oman Convention & Exhibition Centre",
      registerBtn: "Register Now",
      downloadBtn: "Download Brochure",
      description: "A strategic platform to enhance economic and trade relations between the two brotherly countries"
    }
  };

  const text = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={muscatHero} 
          alt="Muscat Panorama" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-4xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {text.title}
          </h1>

          {/* Subtitle */}
          <h2 className={`text-xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {text.subtitle}
          </h2>

          {/* Year Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-secondary/20 backdrop-blur-sm rounded-full text-primary-foreground text-2xl font-bold mb-8">
            2025
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-primary-foreground">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-secondary" />
              <span className="text-lg font-medium">{text.date}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="text-lg font-medium">{text.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="xl" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {text.registerBtn}
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Download className="w-5 h-5 mr-2" />
              {text.downloadBtn}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;