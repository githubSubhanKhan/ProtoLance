import { Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  // Social media links - easily editable
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/your-profile", // Update with your Instagram URL
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
      url: "https://linkedin.com/in/your-profile", // Update with your LinkedIn URL
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="w-full bg-darkcustom py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left side - Social Icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhitecustom p-2 rounded-full hover:bg-offwhitecustom hover:text-darkcustom transition-opacity duration-300"
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Right side - Copyright */}
        <div className="text-whitecustom text-sm">
          © 2025 ProtoLance. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;