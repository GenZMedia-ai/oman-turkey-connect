import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  language: 'ar' | 'en';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, language }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const isRTL = language === 'ar';

  const labels = {
    ar: {
      days: 'أيام',
      hours: 'ساعات',
      minutes: 'دقائق',
      seconds: 'ثواني'
    },
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    }
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`grid grid-cols-4 gap-4 ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
      {Object.entries(timeLeft).map(([key, value], index) => (
        <div key={key} className="text-center">
          <div className="bg-gradient-to-br from-primary to-primary-glow rounded-lg p-4 shadow-elegant">
            <div className="text-2xl md:text-4xl font-bold text-primary-foreground mb-2">
              {formatNumber(value)}
            </div>
            <div className="text-xs md:text-sm text-primary-foreground/80 font-medium">
              {labels[language][key as keyof typeof labels.ar]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;