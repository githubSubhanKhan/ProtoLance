import { useState, useEffect } from 'react';
import image from "@/components/images/MainBackground.png"

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

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center lg:justify-start overflow-hidden">
      {/* Background - only on large screens */}
      <div 
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`, // Update with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark overlay for better text readability on large screens */}
      <div className="absolute inset-0 hidden lg:block" />
      
      {/* Mobile background - darkcustom color */}
      <div className="absolute inset-0 lg:hidden bg-darkcustom" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row lg:items-start">
            
            {/* Large "D" */}
            <div className="mb-4 lg:mb-0 lg:mr-4">
              <h1 
                className="text-whitecustom font-black leading-none"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(200px, 25vw, 400px)', // Responsive font size
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  verticalAlign: 'middle'
                }}
              >
                D
              </h1>
            </div>
            
            {/* Three lines of text */}
            <div className="flex flex-col justify-center lg:justify-start">
              <h2 
                className="text-whitecustom font-black leading-none mb-1"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 8vw, 96px)', // Responsive font size
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  verticalAlign: 'middle'
                }}
              >
                esign.
              </h2>
              
              <h2 
                className="text-whitecustom font-black leading-none mb-1"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 8vw, 96px)', // Responsive font size
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  verticalAlign: 'middle'
                }}
              >
                evelop.
              </h2>
              
              <h2 
                className="text-whitecustom font-black leading-none"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 8vw, 96px)', // Responsive font size
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  verticalAlign: 'middle'
                }}
              >
                eploy.
              </h2>
            </div>
            
          </div>
          
          {/* Subtitle */}
          <div className="mt-2 lg:mt- max-w-md lg:max-w-lg">
            <p className="text-offwhitecustom text-lg lg:text-xl leading-relaxed mb-2">
              From First Sketch to Final Launch,
            </p>
            <p className="text-offwhitecustom text-lg lg:text-xl leading-relaxed mb-2">
              We Handle It All.
            </p>
          </div>
          
          {/* Contact Button */}
          <div className="mt-4">
            <button className="bg-transparent border-2 border-whitecustom text-whitecustom px-8 py-3 text-lg font-medium hover:bg-whitecustom hover:text-darkcustom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-whitecustom focus:ring-offset-2 focus:ring-offset-transparent">
              Contact US
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;