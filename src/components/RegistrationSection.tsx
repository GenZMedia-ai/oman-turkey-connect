import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Building, Award, Send } from "lucide-react";

interface RegistrationSectionProps {
  language: 'ar' | 'en';
}

const RegistrationSection = ({ language }: RegistrationSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    participationType: 'participant',
    notes: ''
  });

  const isRTL = language === 'ar';

  const content = {
    ar: {
      title: "سجل اهتمامك",
      subtitle: "كن جزءاً من الملتقى",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني", 
      participationType: "نوع المشاركة",
      notes: "ملاحظات إضافية",
      submit: "أرسل",
      participantTypes: {
        participant: "مشارك (100 ريال عُماني)",
        exhibitor: "عارض (اتصل بنا للأسعار)",
        sponsor: "راعي (حسب فئة الرعاية)"
      },
      ctaCards: [
        {
          title: "للمشاركين",
          description: "احجز مكانك الآن واستفد من فرص التواصل والتعلم",
          buttonText: "سجل كمشارك",
          icon: Users
        },
        {
          title: "للعارضين", 
          description: "اعرض منتجاتك وخدماتك أمام جمهور مستهدف",
          buttonText: "احجز جناحك",
          icon: Building
        },
        {
          title: "للرعاة",
          description: "عزز حضور علامتك التجارية",
          buttonText: "كن راعياً",
          icon: Award
        }
      ]
    },
    en: {
      title: "Register Your Interest",
      subtitle: "Be Part of the Forum", 
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      participationType: "Participation Type",
      notes: "Additional Notes",
      submit: "Submit",
      participantTypes: {
        participant: "Participant (100 OMR)",
        exhibitor: "Exhibitor (Contact us for pricing)",
        sponsor: "Sponsor (Based on sponsorship category)"
      },
      ctaCards: [
        {
          title: "For Participants",
          description: "Reserve your spot now and benefit from networking and learning opportunities",
          buttonText: "Register as Participant",
          icon: Users
        },
        {
          title: "For Exhibitors",
          description: "Showcase your products and services to a targeted audience", 
          buttonText: "Book Your Booth",
          icon: Building
        },
        {
          title: "For Sponsors",
          description: "Enhance your brand presence",
          buttonText: "Become a Sponsor",
          icon: Award
        }
      ]
    }
  };

  const text = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="register" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* CTA Cards */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
              {text.subtitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {text.ctaCards.map((card, index) => (
                <div key={index} className="group">
                  <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <card.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                    <div className="mt-auto">
                      <Button variant="hero" className="w-full group-hover:scale-105 transition-transform">
                        {card.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                {text.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    {text.fullName} *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    {text.phone} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    {text.email} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Participation Type */}
                <div className="space-y-4">
                  <Label className="text-foreground font-medium">
                    {text.participationType}
                  </Label>
                  <RadioGroup
                    value={formData.participationType}
                    onValueChange={(value) => handleInputChange('participationType', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="participant" id="participant" />
                      <Label htmlFor="participant" className="text-sm">
                        {text.participantTypes.participant}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="exhibitor" id="exhibitor" />
                      <Label htmlFor="exhibitor" className="text-sm">
                        {text.participantTypes.exhibitor}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sponsor" id="sponsor" />
                      <Label htmlFor="sponsor" className="text-sm">
                        {text.participantTypes.sponsor}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground font-medium">
                    {text.notes}
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  {text.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;