
import { useState } from "react";
import { Printer, Video, ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrototypingMethodSelector from "./PrototypingMethodSelector";

interface PrototypingStepProps {
  count: number;
}

const PrototypingStep = ({ count }: PrototypingStepProps) => {
  const [activePrototypingMethod, setActivePrototypingMethod] = useState<"printing" | "cnc" | "sheet">("printing");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
      <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-lg h-80 animate-slide-up">
        <PrototypingMethodSelector 
          activeMethod={activePrototypingMethod} 
          setActiveMethod={setActivePrototypingMethod} 
        />
        <div className="absolute bottom-4 right-4 text-sm font-bold">{count}+ prototypes delivered</div>
      </div>
      
      <div className="order-1 lg:order-2 space-y-6 animate-slide-up" style={{
        animationDelay: "200ms"
      }}>
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-2">
          <span className="mr-2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
          Step Two
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-accent">Build in 48h, Not Weeks</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Printer className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Choose 3D printing (SLA/FDM), CNC machining, or sheet metal—no minimum orders.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Video className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <p className="text-gray-600">Track your prototype's progress in real time via live factory cams.</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <p className="text-gray-700 font-medium">Switch between processes:</p>
          <div className="flex items-center space-x-2">
            <ToggleLeft 
              className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "printing" ? "text-primary" : "text-gray-400"}`} 
              onClick={() => setActivePrototypingMethod("printing")} 
            />
            <ToggleRight 
              className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "cnc" ? "text-primary" : "text-gray-400"}`} 
              onClick={() => setActivePrototypingMethod("cnc")} 
            />
            <ToggleRight 
              className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "sheet" ? "text-primary" : "text-gray-400"}`} 
              onClick={() => setActivePrototypingMethod("sheet")} 
            />
          </div>
        </div>
        <Button className="group mt-4">
          Explore Prototyping Options
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default PrototypingStep;
