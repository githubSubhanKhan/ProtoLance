import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const containerRef = useRef(null);
  const [animationSpeed, setAnimationSpeed] = useState(30); // seconds for one complete cycle
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials = [
    {
      review: "This platform has revolutionized how we approach our research. The AI recommendations are spot-on and save us countless hours.",
      name: "Dr. Sarah Johnson",
      department: "Department of Biology",
    },
    {
      review: "The intelligent search capabilities have helped me discover resources I never would have found otherwise. Truly impressive technology.",
      name: "Prof. Michael Chen",
      department: "Department of Physics",
    },
    {
      review: "As a researcher, I can't imagine working without this tool now. It understands my research context better than any other system I've used.",
      name: "Dr. Emily Rodriguez",
      department: "Department of Chemistry",
    },
    {
      review: "The cross-disciplinary recommendations have opened up new research avenues I hadn't considered. This AI tool is a game-changer.",
      name: "Prof. David Thompson",
      department: "Department of Psychology",
    },
    {
      review: "The accuracy of the recommendations is remarkable. It's like having a personal research assistant that knows exactly what I need.",
      name: "Dr. Lisa Wang",
      department: "Department of Engineering",
    },
    {
      review: "This system has transformed our entire research workflow. The time saved on literature discovery is incredible.",
      name: "Prof. Ahmed Hassan",
      department: "Department of Economics",
    },
  ];

  return (
    <section className="w-full py-8 overflow-hidden" id="testimonials">
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
                  <span className="text-sm text-gray-500">{testimonial.department}</span>
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