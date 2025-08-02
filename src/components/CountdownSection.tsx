import CountdownTimer from "./CountdownTimer";
import { Calendar, MapPin } from "lucide-react";
import conferenceCenter from "@/assets/conference-center.jpg";

interface CountdownSectionProps {
  language: 'ar' | 'en';
}

const CountdownSection = ({ language }: CountdownSectionProps) => {
  const isRTL = language === 'ar';
  
  const content = {
    ar: {
      title: "موعد الملتقى",
      date: "15-17 ديسمبر 2025",
      location: "مركز عُمان للمؤتمرات والمعارض - مسقط",
      countdown: "الوقت المتبقي حتى بداية الملتقى:"
    },
    en: {
      title: "Forum Schedule",
      date: "December 15-17, 2025", 
      location: "Oman Convention & Exhibition Centre - Muscat",
      countdown: "Time remaining until the forum begins:"
    }
  };

  const text = content[language];
  
  // Target date for the countdown (December 15, 2025)
  const targetDate = "2025-12-15T09:00:00";

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={conferenceCenter} 
          alt="Conference Center" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-secondary/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-8">
              📅 {text.title}
            </h2>
            
            {/* Event Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                <Calendar className="w-6 h-6 text-secondary" />
                <span className="text-xl md:text-2xl font-semibold">{text.date}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="text-lg md:text-xl">{text.location}</span>
              </div>
            </div>
          </div>

          {/* Countdown Title */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
              ⏳ {text.countdown}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto">
            <CountdownTimer 
              targetDate={targetDate} 
              language={language}
            />
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <div className="w-16 h-0.5 bg-secondary/60"></div>
            <div className="w-4 h-4 bg-secondary rounded-full"></div>
            <div className="w-16 h-0.5 bg-secondary/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;