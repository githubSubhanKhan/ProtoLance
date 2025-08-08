import { Mail, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Alert from "../ui/alert";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: 'success', message: '' });
    }, 5000); // Auto hide after 5 seconds
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '';
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/form/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        showAlert('success', 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // reset form
      } else {
        showAlert('error', `Failed to send message: ${data?.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showAlert('error', 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Alert show={alert.show} type={alert.type} message={alert.message} />

      <section className="w-full py-8 px-4" id="contact">
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

                <div className="space-y-6">
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
                    <button id="sendBtn"
                      onClick={handleSubmit}
                      disabled={!isFormValid() || loading}
                      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-darkcustom focus:ring-offset-2 
    ${(!isFormValid() || loading)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-darkcustom text-white hover:opacity-90 cursor-pointer'
                        }`}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;