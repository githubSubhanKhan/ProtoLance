import { Mail, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full py-12 px-4" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card - Let's Work Together (Hidden on mobile) */}
          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200 hidden lg:block">
            <CardContent className="p-8 h-full flex flex-col justify-center text-center">
              <div className="mb-6">
                <MessageSquare className="w-12 h-12 text-darkcustom mb-4 mx-auto" />
                <h2 className="text-2xl font-bold text-darkcustom mb-4">
                  Let's Work Together
                </h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-darkcustom mb-2">
                  Have an idea in mind or just want to say hello?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We'd love to hear from you. Fill out the form and we'll get back to you soon.
                </p>
              </div>
              
              <div className="flex items-center text-darkcustom mx-auto">
                <Mail className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">contactprotolance@gmail.com</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form */}
          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center text-darkcustom mb-6">
                Contact Now
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkcustom focus:border-transparent text-darkcustom placeholder-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkcustom focus:border-transparent text-darkcustom placeholder-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter Your Message Here"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkcustom focus:border-transparent text-darkcustom placeholder-gray-500 resize-none"
                    required
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-darkcustom text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-darkcustom focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;