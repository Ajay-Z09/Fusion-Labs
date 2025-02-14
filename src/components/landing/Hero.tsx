
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    "ISO 9001 Certified",
    "500+ Projects Delivered",
    "24/7 Engineering Support"
  ];

  return (
    <section className="min-h-[90vh] flex flex-col bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h2 className="text-2xl font-bold text-primary">FusionLabs</h2>
      </div>
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent tracking-tight animate-fade-in">
                  Accelerate Your Product 
                  <span className="block text-primary mt-2">
                    From Concept to Production
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Transform your ideas into market-ready products with our end-to-end design and manufacturing solutions. Get to market 40% faster with our DFM expertise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg"
                  onClick={scrollToQuoteForm}
                >
                  Get Your Free DFM Analysis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-600 font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
