import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const containerRef = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState(30); // seconds for one complete cycle
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      review: "Their team completely reimagined our product's user experience. Our bounce rate dropped by 40% after the new UI/UX went live.",
      name: "Amir Qureshi",
      company: "Co-Founder, ByteDash Technologies",
    },
    {
      review: "From custom dashboards to API integrations, their web development work has been flawless. We now ship features twice as fast.",
      name: "Sophia Martinez",
      company: "Product Lead, FinovateX",
    },
    {
      review: "We integrated their AI solutions into our workflow and the automation results are game-changing. It's like we leveled up overnight.",
      name: "Jason Lee",
      company: "CTO, NeuralNest AI",
    },
    {
      review: "They didn’t just design graphics, they told our brand story. Everything from the color palette to icons feels premium and on-brand.",
      name: "Rida Aslam",
      company: "Creative Director, NovaPixel Studio",
    },
    {
      review: "Working with them felt like having an in-house dev team. Fast, reliable, and incredibly aligned with our startup goals.",
      name: "Danish Farooq",
      company: "CEO, LaunchGrid",
    },
    {
      review: "They overhauled our entire platform, frontend, backend, and AI features, and it’s now the most stable and scalable version we’ve ever had.",
      name: "Meera Patel",
      company: "Head of Engineering, CloudSync Labs",
    },
  ];


  return (
    <section className="w-full overflow-hidden py-16" id="testimonials">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 text-darkcustom">What Our Users Say</h2>
        <p className="text-gray-600 text-center">Discover how our platform is transforming research and learning</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 px-4"
          style={{
            animation: `scrollXReverse ${animationSpeed}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            display: "flex",
            whiteSpace: "nowrap"
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, idx) => (
            <Card
              key={idx}
              className="w-80 bg-white rounded-lg shadow-md flex-shrink-0 border border-gray-200 transform transition-transform hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <CardContent className="p-6 flex flex-col text-darkcustom h-full">
                <Quote className="text-darkcustom w-8 h-8 mb-3" />

                <div className="flex-grow">
                  <p className="text-base whitespace-normal leading-relaxed mb-6 text-darkcustom">
                    "{testimonial.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 w-full mt-auto">
                  <h4 className="font-semibold text-darkcustom">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.company}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollXReverse {
          0% {
            transform: translateX(-${testimonials.length * 336}px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          @keyframes scrollXReverse {
            0% {
              transform: translateX(-${testimonials.length * 300}px);
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;