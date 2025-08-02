import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, FileText } from "lucide-react";

interface ProgramSectionProps {
  language: 'ar' | 'en';
}

const ProgramSection = ({ language }: ProgramSectionProps) => {
  const isRTL = language === 'ar';

  const content = {
    ar: {
      title: "البرنامج الرئيسي",
      viewFullProgram: "عرض البرنامج الكامل",
      days: [
        {
          title: "اليوم الأول - 15 ديسمبر",
          events: [
            "افتتاح المعرض والملتقى",
            "الجلسة الافتتاحية",
            "جلسات B2B"
          ]
        },
        {
          title: "اليوم الثاني - 16 ديسمبر", 
          events: [
            "ورش العمل التخصصية",
            "الجلسات النقاشية",
            "العروض التقديمية"
          ]
        },
        {
          title: "اليوم الثالث - 17 ديسمبر",
          events: [
            "زيارات ميدانية",
            "توقيع الاتفاقيات",
            "الختام"
          ]
        }
      ]
    },
    en: {
      title: "Main Program",
      viewFullProgram: "View Full Program",
      days: [
        {
          title: "Day 1 - December 15",
          events: [
            "Exhibition and Forum Opening",
            "Opening Session",
            "B2B Sessions"
          ]
        },
        {
          title: "Day 2 - December 16",
          events: [
            "Specialized Workshops",
            "Panel Discussions", 
            "Presentations"
          ]
        },
        {
          title: "Day 3 - December 17",
          events: [
            "Field Visits",
            "Agreement Signing",
            "Closing Ceremony"
          ]
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {text.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>

          {/* Program Days */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {text.days.map((day, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Day Header */}
                  <div className="bg-gradient-to-r from-primary to-primary-glow p-6 text-center">
                    <Calendar className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-primary-foreground">
                      {day.title}
                    </h3>
                  </div>

                  {/* Events List */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      {day.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <div className="px-6 pb-6">
                    <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="hero" size="xl" className="group">
              <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {text.viewFullProgram}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>{language === 'ar' ? 'ثلاثة أيام مليئة بالفعاليات' : 'Three days full of events'}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>{language === 'ar' ? 'متحدثون من الطراز العالمي' : 'World-class speakers'}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{language === 'ar' ? 'جلسات تفاعلية ومتنوعة' : 'Interactive and diverse sessions'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;