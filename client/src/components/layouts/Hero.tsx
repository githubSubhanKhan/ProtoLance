import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import image from "@/components/images/MainBackground.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 flex items-center justify-center overflow-hidden lg:min-h-0">
      {/* Backgrounds */}
      <div 
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 hidden lg:block" />
      <div className="absolute inset-0 lg:hidden bg-darkcustom" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-start lg:items-start items-center">

          {/* D + Typing Text Block */}
          <div className="flex flex-row items-start justify-start w-fit">
            {/* Big "D" */}
            <div className="mr-2 lg:mr-4 leading-none">
              <h1
                className="text-whitecustom font-black"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 900,
                  fontSize: isMobile ? 'clamp(120px, 25vw, 160px)' : 'clamp(150px, 22vw, 340px)',
                  lineHeight: '100%',
                  letterSpacing: '-2%'
                }}
              >
                D
              </h1>
            </div>

            {/* Typing Text */}
            <div className="flex flex-col justify-start gap-[0.25em] leading-none">
              {['esign.', 'evelop.', 'eploy.'].map((text, index) => (
                <h2
                  key={index}
                  className="text-whitecustom font-black leading-none"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(48px, 8vw, 96px)',
                    lineHeight: '100%',
                    letterSpacing: '-2%'
                  }}
                >
                  <TypeAnimation
                    sequence={[text, 2000, '', 500]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </h2>
              ))}
            </div>
          </div>

          {/* Bottom Content - Different positioning for mobile vs desktop */}
          <div className={`mt-4 flex flex-col items-start w-fit ${
            isMobile 
              ? 'self-center text-center' 
              : 'ml-[calc(200px+1rem)]'
          }`}>
            <div className="flex flex-col items-center text-center">
              <div className="max-w-md">
                <p className={`text-offwhitecustom leading-relaxed mb-2 ${
                  isMobile 
                    ? 'text-sm sm:text-base' 
                    : 'text-base sm:text-lg lg:text-xl'
                }`}>
                  From First Sketch to Final Launch,
                </p>
                <p className={`text-offwhitecustom leading-relaxed mb-2 ${
                  isMobile 
                    ? 'text-sm sm:text-base' 
                    : 'text-base sm:text-lg lg:text-xl'
                }`}>
                  We Handle It All.
                </p>
              </div>
              <div className="mt-4">
                <button
                  onClick={scrollToContact}
                  className={`bg-transparent border-2 border-whitecustom text-whitecustom font-medium hover:bg-whitecustom hover:text-darkcustom transition-all duration-300 rounded-lg ${
                    isMobile 
                      ? 'px-6 py-2 text-base' 
                      : 'px-8 py-2 text-lg'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;