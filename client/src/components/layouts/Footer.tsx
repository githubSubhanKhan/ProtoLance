import { Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  // Social media links - easily editable
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/theprotolance", // Update with your Instagram URL
      label: "Instagram"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contactprotolance@gmail.com", // Update with your email
      label: "Email"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/protolance", // Update with your LinkedIn URL
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="w-full bg-darkcustom py-2 px-2 sm:px-4">
      <div className="flex items-center justify-between sm:container sm:mx-auto">
        
        {/* Left side - Social Icons */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhitecustom p-1 sm:p-2 rounded-full hover:bg-offwhitecustom hover:text-darkcustom transition-opacity duration-300"
                aria-label={social.label}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            );
          })}
        </div>

        {/* Right side - Copyright */}
        <div className="text-whitecustom text-xs sm:text-sm whitespace-nowrap">
          © 2025 ProtoLance. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;