import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

interface HeaderProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = language === 'ar';

  const navigation = {
    ar: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'عن الملتقى', href: '#about' },
      { name: 'المنظمون', href: '#organizers' },
      { name: 'الشركاء والرعاة', href: '#sponsors' },
      { name: 'البرنامج', href: '#program' },
      { name: 'التغطية الإعلامية', href: '#media' },
      { name: 'التسجيل', href: '#register' }
    ],
    en: [
      { name: 'Home', href: '#home' },
      { name: 'About Forum', href: '#about' },
      { name: 'Organizers', href: '#organizers' },
      { name: 'Partners & Sponsors', href: '#sponsors' },
      { name: 'Program', href: '#program' },
      { name: 'Media Coverage', href: '#media' },
      { name: 'Register', href: '#register' }
    ]
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  {language === 'ar' ? 'ع ت' : 'OT'}
                </span>
              </div>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="font-bold text-sm text-foreground">
                  {language === 'ar' ? 'الملتقى العماني التركي' : 'Oman-Turkey Forum'}
                </div>
                <div className="text-xs text-muted-foreground">2025</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation[language].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Register Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </Button>

            <Button variant="hero" size="lg" className="hidden sm:inline-flex">
              {language === 'ar' ? 'سجل الآن' : 'Register Now'}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation[language].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="lg" className="w-full">
                  {language === 'ar' ? 'سجل الآن' : 'Register Now'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;