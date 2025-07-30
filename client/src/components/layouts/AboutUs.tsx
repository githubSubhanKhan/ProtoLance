import React from 'react';
import { Users, Flag, ClipboardList, HelpCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  const aboutData = [
    {
      icon: <Users className="w-12 h-12 text-darkcustom" />,
      title: "Who We Are",
      description: "A passionate team of designers and developers crafting high-quality digital solutions. We combine creativity with technical expertise to bring ideas to life."
    },
    {
      icon: <Flag className="w-12 h-12 text-darkcustom" />,
      title: "What We Do",
      description: "We offer UI/UX design and full-stack web development. Every solution is tailored, responsive, and built for real-world performance."
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-darkcustom" />,
      title: "How We Work",
      description: "Through a collaborative process — from planning to launch — we ensure smooth communication, on-time delivery, and results that exceed expectations."
    },
    {
      icon: <HelpCircle className="w-12 h-12 text-darkcustom" />,
      title: "Why Choose Us",
      description: "We blend design thinking with development precision to create meaningful digital experiences that elevate your brand and win your audience."
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-darkcustom mb-4 font-poppins">
            About Us
          </h2>
          {/* <p className="text-xl md:text-2xl text-darkcustom font-medium font-poppins">
            Driven by Design. Powered by Code. Built for Impact.
          </p> */}
        </div>

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutData.map((item, index) => (
            <div 
              key={index}
              className="bg-transparent border-2 border-darkcustom rounded-lg p-4 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-darkcustom mb-2 font-poppins">
                  {item.title}
                </h3>
                <p className="text-base md:text-base lg:text-base text-darkcustom leading-relaxed font-arimo">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;