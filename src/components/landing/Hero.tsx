
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [startupCount, setStartupCount] = useState(3);
  const [savingsAmount, setSavingsAmount] = useState(2.1);

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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary animate-fade-in">
                  <Rocket size={20} />
                  <span className="text-sm font-medium">Launch Success Guarantee</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent tracking-tight animate-fade-in">
                  Launch Your Product Faster
                  <span className="block text-primary mt-2">
                    —or We'll Refund 20%
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
                  End-to-end product launches for micro-mobility, medtech, and NewSpace startups. 
                  DFM + manufacturing + go-to-market support in one subscription.
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full px-6 py-3 inline-flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">{startupCount}</span>
                  <span className="text-gray-600">startups launched this week</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">${savingsAmount}M</span>
                  <span className="text-gray-600">saved in July</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg"
                  onClick={scrollToQuoteForm}
                >
                  Start Your Risk-Free Launch
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
