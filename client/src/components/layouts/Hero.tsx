import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import image from "@/components/images/MainBackground.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
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
    <section className="relative w-full py-16 flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div 
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 hidden lg:block" />
      <div className="absolute inset-0 lg:hidden bg-darkcustom" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-row items-start justify-center lg:justify-start">
            
            {/* Big "D" */}
            <div className="mr-2 lg:mr-4">
              <h1
                className="text-whitecustom font-black leading-none"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 900,
                  fontSize: isMobile ? '160px' : 'clamp(200px, 25vw, 400px)',
                  lineHeight: '100%',
                  letterSpacing: '-2%'
                }}
              >
                D
              </h1>
            </div>

            {/* Typing Animation Words */}
            <div className="flex flex-col justify-center gap-1">
              {['esign.', 'evelop.', 'eploy.'].map((text, index) => (
                <h2
                  key={index}
                  className="text-whitecustom font-black leading-none"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: isMobile ? '40px' : 'clamp(48px, 8vw, 96px)',
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

          {/* Subtitles */}
          <div className="mt-2 max-w-md lg:max-w-lg text-center lg:text-left">
            <p className="text-offwhitecustom text-base sm:text-lg lg:text-xl leading-relaxed mb-2">
              From First Sketch to Final Launch,
            </p>
            <p className="text-offwhitecustom text-base sm:text-lg lg:text-xl leading-relaxed mb-2">
              We Handle It All.
            </p>
          </div>

          {/* Contact Button */}
          <div className="mt-4">
            <button onClick={scrollToContact} 
            className="bg-transparent border-2 border-whitecustom text-whitecustom px-8 py-2 text-lg font-medium hover:bg-whitecustom hover:text-darkcustom transition-all duration-300 rounded-lg">
              Contact Us
            </button>
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
