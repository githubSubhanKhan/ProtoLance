import React from 'react';
import { Palette, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-darkcustom" />,
      title: "UI/UX Designing",
      description: "Clean, user-friendly, and modern interfaces for web and mobile platforms."
    },
    {
      icon: <Monitor className="w-12 h-12 text-darkcustom" />,
      title: "Web Development",
      description: "Frontend and backend development using modern tech stacks to build robust, fully responsive web apps."
    }
  ];

  return (
    <section className="bg-offwhitecustom py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-darkcustom mb-4 font-poppins">
            Our Services
          </h2>
          <p className="text-xl text-darkcustom font-medium mb-6 font-poppins">
            Seamless Collaboration, Smart Execution, Impactful Results
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-darkcustom text-base leading-relaxed font-arimo">
              We transform ideas into digital reality through refined design, robust development, and smooth deployment. At 
              Protolance, we merge innovation with precision, crafting responsive and high-performing web solutions that 
              empower your brand to stand out in the digital world.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 duration-300 border border-darkcustom border-[2px] cursor-pointer hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-darkcustom mb-4 font-poppins underline decoration-2 underline-offset-4">
                  {service.title}
                </h3>
                <p className="text-darkcustom text-sm leading-relaxed font-arimo">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;