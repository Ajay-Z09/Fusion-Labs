
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
      
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg animate-slide-up h-80 flex items-center justify-center" style={{
        animationDelay: "200ms"
      }}>
        <div className="text-center">
          <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
            <Upload className="h-12 w-12 text-primary" />
          </div>
          <h4 className="text-xl font-semibold text-accent mb-2">Drag & Drop Your CAD Files</h4>
          <p className="text-gray-600">Get instant optimization feedback and cost analysis</p>
        </div>
      </div>
    </div>
  );
};

export default DesignStep;
