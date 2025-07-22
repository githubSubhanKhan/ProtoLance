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
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="services">
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

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center px-4 text-center
                ${index !== services.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-darkcustom pb-8 md:pb-0'
                  : ''}
              `}
            >
              <div className="mb-2">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-darkcustom mb-2 font-poppins">
                {service.title}
              </h3>
              <p className="text-darkcustom text-base leading-relaxed font-arimo">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;