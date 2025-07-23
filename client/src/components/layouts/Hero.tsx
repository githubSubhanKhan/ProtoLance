import { useState, useEffect } from 'react';
import background from "@/components/images/MainBackground.png";
import headingImage from "@/components/images/Main_Heading[1].png"; // Make sure the path is correct

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

  return (
    <section className="relative w-full min-h-screen flex items-start justify-start overflow-hidden">
      {/* Background - only on large screens */}
      <div 
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 hidden lg:block" />
      <div className="absolute inset-0 lg:hidden bg-darkcustom" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-24">
        <div className="flex flex-col items-start text-left">

          {/* Group container for heading + centered text */}
          <div className="flex flex-col items-start max-w-[700px] w-full">

            {/* Heading Image */}
            <img 
              src={headingImage} 
              alt="Main Heading" 
              className="w-full h-auto object-contain mb-6" 
            />

            {/* Centered Text and Button BELOW the image */}
            <div className="w-full flex flex-col items-center text-center">
              <p className="text-offwhitecustom text-lg lg:text-xl leading-relaxed mb-2">
                From First Sketch to Final Launch,
              </p>
              <p className="text-offwhitecustom text-lg lg:text-xl leading-relaxed mb-4">
                We Handle It All.
              </p>
              <button className="bg-transparent border-2 border-whitecustom text-whitecustom px-8 py-3 text-lg font-medium hover:bg-whitecustom hover:text-darkcustom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-whitecustom focus:ring-offset-2 focus:ring-offset-transparent">
                Contact US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;
