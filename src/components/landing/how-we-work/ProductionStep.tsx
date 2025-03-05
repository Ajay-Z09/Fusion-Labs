
import { Factory, ShieldCheck, ArrowRight, PenTool, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductionStep = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-slide-up">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-2">
          <span className="mr-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">3</span>
          Step Three
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-accent">From 1 to 10,000 Units</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Factory className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Seamless handoff to production with pre-vetted factories.</p>
          </div>
          <div className="flex items-start space-x-3">
            <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Compliance support for FDA, ISO, or CE certifications.</p>
          </div>
        </div>
        <Button className="group mt-4">
          Plan Your Production
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="relative rounded-xl overflow-hidden shadow-lg p-6 bg-white h-80 animate-slide-up" style={{
        animationDelay: "200ms"
      }}>
        <div className="absolute inset-0 p-6">
          <div className="h-full flex flex-col">
            <h4 className="font-bold text-center mb-6">Production Roadmap</h4>
            <div className="flex-1 flex items-center">
              <div className="w-full">
                <div className="relative">
                  <div className="absolute h-2 bg-primary rounded-full" style={{
                    width: "100%"
                  }}></div>
                  
                  <div className="absolute flex flex-col items-center" style={{
                    left: "0%",
                    top: "-40px"
                  }}>
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <PenTool className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium mt-2">Design</span>
                  </div>
                  
                  <div className="absolute flex flex-col items-center" style={{
                    left: "50%",
                    top: "-40px",
                    transform: "translateX(-50%)"
                  }}>
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Layers className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium mt-2">Prototype</span>
                  </div>
                  
                  <div className="absolute flex flex-col items-center" style={{
                    right: "0%",
                    top: "-40px"
                  }}>
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Factory className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium mt-2">Production</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="flex items-center px-4 py-2 bg-accent/10 rounded-lg space-x-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="font-bold text-accent">Zero redesigns guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionStep;
