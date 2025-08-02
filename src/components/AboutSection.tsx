import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  language: 'ar' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const isRTL = language === 'ar';

  const content = {
    ar: {
      title: "عن الملتقى",
      description: "يُعد الملتقى العماني التركي منصة استراتيجية لتعزيز العلاقات الاقتصادية والتجارية بين البلدين الشقيقين، ويهدف إلى:",
      objectives: [
        "تعزيز التبادل التجاري والاستثماري",
        "استكشاف فرص الشراكات في القطاعات الواعدة", 
        "تبادل الخبرات والمعرفة",
        "بناء جسور التواصل بين مجتمعي الأعمال"
      ],
      readMore: "اقرأ المزيد"
    },
    en: {
      title: "About the Forum", 
      description: "The Oman-Turkey Forum is a strategic platform for enhancing economic and trade relations between the two brotherly countries, and aims to:",
      objectives: [
        "Enhance trade and investment exchange",
        "Explore partnership opportunities in promising sectors",
        "Exchange expertise and knowledge", 
        "Build communication bridges between business communities"
      ],
      readMore: "Read More"
    }
  };

  const text = content[language];

  const stats = [
    { icon: Users, value: "500+", label: language === 'ar' ? "مشارك متوقع" : "Expected Participants" },
    { icon: Globe, value: "50+", label: language === 'ar' ? "شركة عارضة" : "Exhibiting Companies" },
    { icon: TrendingUp, value: "20+", label: language === 'ar' ? "جلسة نقاشية" : "Panel Sessions" },
    { icon: Award, value: "10+", label: language === 'ar' ? "ورشة عمل" : "Workshops" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* Section Header */}
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {text.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className={`space-y-6 ${isRTL ? 'order-2' : 'order-1'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {text.description}
              </p>

              {/* Objectives List */}
              <div className="space-y-4">
                {text.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <p className="text-foreground font-medium">{objective}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="mt-8">
                {text.readMore}
              </Button>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 gap-6 ${isRTL ? 'order-1' : 'order-2'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;