
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <h2 className="text-2xl font-bold text-primary">DFM Fusion</h2>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent tracking-tight">
              Turn Ideas into Reality:
              <span className="block text-primary">
                End-to-End Design & Manufacturing Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              From concept sketches to full-scale production—we handle every step to bring your product to market faster, smarter, and at scale.
            </p>
          </div>
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg"
          >
            Get Your Free Consultation Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
