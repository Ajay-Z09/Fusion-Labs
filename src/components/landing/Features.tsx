
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineSteps = [
  {
    title: "Design Analysis",
    description: "Our engineers review your CAD files and provide detailed DFM feedback within 48 hours.",
    duration: "2-3 Days"
  },
  {
    title: "Rapid Prototyping",
    description: "Quick iteration with industrial-grade prototypes to validate design and functionality.",
    duration: "3-5 Days"
  },
  {
    title: "Production Setup",
    description: "Tooling development and production line configuration for optimal efficiency.",
    duration: "2-3 Weeks"
  },
  {
    title: "Quality Testing",
    description: "Rigorous quality control and testing to ensure product meets all specifications.",
    duration: "1-2 Weeks"
  }
];

export const Features = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">
            How We Bring Your Product to Life
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your product moves from concept to production efficiently and reliably.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden sm:block" />

          {/* Timeline steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`lg:text-right ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-accent mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center justify-end text-primary font-medium">
                      <span>Typical Duration: {step.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline marker */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 hidden sm:block">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={scrollToQuoteForm}
            className="group"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
