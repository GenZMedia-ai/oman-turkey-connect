import { MapPin, Phone, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  language: 'ar' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const isRTL = language === 'ar';

  const content = {
    ar: {
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      followUs: "تابعنا",
      copyright: "© 2025 الملتقى العماني التركي. جميع الحقوق محفوظة.",
      links: [
        { name: "عن الملتقى", href: "#about" },
        { name: "البرنامج", href: "#program" },
        { name: "التسجيل", href: "#register" },
        { name: "اتصل بنا", href: "#contact" }
      ],
      contactInfo: {
        email: "info@oman-turkey-forum.om",
        phone: "+968 1234 5678",
        address: "مسقط، سلطنة عُمان"
      }
    },
    en: {
      quickLinks: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow Us", 
      copyright: "© 2025 Oman-Turkey Forum. All rights reserved.",
      links: [
        { name: "About Forum", href: "#about" },
        { name: "Program", href: "#program" },
        { name: "Register", href: "#register" },
        { name: "Contact Us", href: "#contact" }
      ],
      contactInfo: {
        email: "info@oman-turkey-forum.om",
        phone: "+968 1234 5678",
        address: "Muscat, Sultanate of Oman"
      }
    }
  };

  const text = content[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {language === 'ar' ? 'ع ت' : 'OT'}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm">
                    {language === 'ar' ? 'الملتقى العماني التركي' : 'Oman-Turkey Forum'}
                  </div>
                  <div className="text-xs text-primary-foreground/80">2025</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {language === 'ar' 
                  ? 'منصة استراتيجية لتعزيز العلاقات الاقتصادية والتجارية بين البلدين الشقيقين'
                  : 'A strategic platform for enhancing economic and trade relations between the two brotherly countries'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">{text.quickLinks}</h3>
              <ul className="space-y-2">
                {text.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">{text.contact}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80 text-sm">
                    {text.contactInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80 text-sm">
                    {text.contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/80 text-sm">
                    {text.contactInfo.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">{text.followUs}</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="text-center">
              <p className="text-primary-foreground/80 text-sm">
                {text.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;