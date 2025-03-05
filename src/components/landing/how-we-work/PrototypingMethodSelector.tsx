
import { Printer, Factory, Video, CheckCircle2, ToggleLeft, ToggleRight } from "lucide-react";

interface PrototypingMethodSelectorProps {
  activeMethod: "printing" | "cnc" | "sheet";
  setActiveMethod: (method: "printing" | "cnc" | "sheet") => void;
}

const PrototypingMethodSelector = ({ activeMethod, setActiveMethod }: PrototypingMethodSelectorProps) => {
  return (
    <div className="absolute inset-0 bg-gray-100 flex flex-col">
      <div className="flex justify-center space-x-4 p-4 bg-white border-b">
        <button 
          onClick={() => setActiveMethod("printing")} 
          className={`flex items-center px-3 py-2 rounded ${activeMethod === "printing" ? "bg-primary text-white" : "bg-gray-100"}`}
        >
          <Printer className="h-4 w-4 mr-2" />
          3D Printing
        </button>
        <button 
          onClick={() => setActiveMethod("cnc")} 
          className={`flex items-center px-3 py-2 rounded ${activeMethod === "cnc" ? "bg-primary text-white" : "bg-gray-100"}`}
        >
          <Factory className="h-4 w-4 mr-2" />
          CNC Machining
        </button>
        <button 
          onClick={() => setActiveMethod("sheet")} 
          className={`flex items-center px-3 py-2 rounded ${activeMethod === "sheet" ? "bg-primary text-white" : "bg-gray-100"}`}
        >
          <Factory className="h-4 w-4 mr-2" />
          Sheet Metal
        </button>
      </div>
      <div className="flex-1 p-6 flex items-center justify-center">
        {activeMethod === "printing" && (
          <div className="text-center">
            <h4 className="font-bold mb-2">SLA/FDM 3D Printing</h4>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Layer resolution: 25-100 microns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Materials: ABS, PLA, TPU, Nylon, Resin</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Max build volume: 300 x 300 x 300mm</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>24-48 hour turnaround time</span>
              </li>
            </ul>
          </div>
        )}
        {activeMethod === "cnc" && (
          <div className="text-center">
            <h4 className="font-bold mb-2">5-Axis CNC Machining</h4>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Tolerance: ±0.001"</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Materials: Aluminum, Steel, Titanium, Plastics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Max part size: 500 x 500 x 500mm</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>36-72 hour turnaround time</span>
              </li>
            </ul>
          </div>
        )}
        {activeMethod === "sheet" && (
          <div className="text-center">
            <h4 className="font-bold mb-2">Precision Sheet Metal</h4>
            <ul className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Thickness: 0.5-10mm</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Materials: Aluminum, Steel, Stainless Steel</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Bending accuracy: ±0.2°</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>48-96 hour turnaround time</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Video className="h-4 w-4 mr-2 text-red-500" />
          <span className="text-sm">Live factory camera available</span>
        </div>
        <div className="text-sm font-bold">{/* Count will be passed as prop */}+ prototypes delivered</div>
      </div>
    </div>
  );
};

export default PrototypingMethodSelector;
