
import { Upload, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesignStep = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div className="space-y-6 animate-slide-up">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-2">
          <span className="mr-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
          Step One
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-accent">Upload & Optimize in Minutes</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Upload className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Our AI scans your CAD files for 50+ manufacturability risks (tolerances, material waste, tooling conflicts).</p>
          </div>
          <div className="flex items-start space-x-3">
            <BarChart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Instant cost/savings report with actionable insights.</p>
          </div>
        </div>
        <Button className="group mt-4">
          Start with a Design Audit
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="relative rounded-xl overflow-hidden shadow-lg h-80 animate-slide-up" style={{
        animationDelay: "200ms"
      }}>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-gray-100 flex items-center justify-center p-6 relative">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80" alt="Original CAD design" className="max-h-full object-contain" />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow text-xs font-medium">Original Design</div>
          </div>
          <div className="w-1/2 bg-gray-50 flex items-center justify-center p-6 relative">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80" alt="AI-optimized design" className="max-h-full object-contain opacity-90" style={{
              filter: "hue-rotate(120deg)"
            }} />
            <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-md shadow text-xs font-medium text-white">AI-Optimized</div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-2 rounded-full text-sm font-bold">
          30% avg. cost reduction
        </div>
      </div>
    </div>
  );
};

export default DesignStep;
