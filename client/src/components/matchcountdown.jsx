import { useState, useEffect } from 'react';
import landingBg from '../components/photos/landingr.jpg';
import logo from '../components/photos/zero.png';

const MatchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    mins: 8,
    secs: 49,
  });


 const redirectToEfootball = () => {
    window.location.href = '/efootball';
 }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landingBg})` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        {/* Tournament logo */}
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="ZQG"
            className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform scale-110 object-contain opacity-80 hover:opacity-100"
          />
        </div>

        {/* Tournament name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
          Efootball 2025
        </h1>

        {/* Countdown timer */}
        <div className="flex gap-4 sm:gap-6 text-center text-white mb-6 sm:mb-8">
          {['days', 'hours', 'mins', 'secs'].map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                {timeLeft[unit].toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm opacity-75">{unit}</div>
            </div>
          ))}
        </div>

        {/* Join button */}
        <button className="mt-4 my-5 sm:mt-8 px-4 sm:px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base" onClick={redirectToEfootball}>
          Register Now
        </button>

        
      </div>
    </div>
  );
};

export default MatchCountdown;