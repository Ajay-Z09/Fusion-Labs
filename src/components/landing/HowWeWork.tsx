import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Database, BarChart, Printer, Factory, Video, Package, ShieldCheck, ArrowRight, CheckCircle2, ToggleLeft, ToggleRight } from "lucide-react";
const HowWeWork = () => {
  const [activePrototypingMethod, setActivePrototypingMethod] = useState<"printing" | "cnc" | "sheet">("printing");
  const [count, setCount] = useState(527);

  // Simulate counter incrementing
  setTimeout(() => {
    setCount(prevCount => prevCount + 1);
  }, 30000); // Increment every 30 seconds

  return <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Your Blueprint to Prototyping Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From idea to prototype in 3 steps—faster, smarter, and stress-free.
          </p>
        </div>

        {/* Step 1: AI-Powered Design Audit */}
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

        {/* Step 2: Rapid Prototyping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-lg h-80 animate-slide-up">
            <div className="absolute inset-0 bg-gray-100 flex flex-col">
              <div className="flex justify-center space-x-4 p-4 bg-white border-b">
                <button onClick={() => setActivePrototypingMethod("printing")} className={`flex items-center px-3 py-2 rounded ${activePrototypingMethod === "printing" ? "bg-primary text-white" : "bg-gray-100"}`}>
                  <Printer className="h-4 w-4 mr-2" />
                  3D Printing
                </button>
                <button onClick={() => setActivePrototypingMethod("cnc")} className={`flex items-center px-3 py-2 rounded ${activePrototypingMethod === "cnc" ? "bg-primary text-white" : "bg-gray-100"}`}>
                  <Factory className="h-4 w-4 mr-2" />
                  CNC Machining
                </button>
                <button onClick={() => setActivePrototypingMethod("sheet")} className={`flex items-center px-3 py-2 rounded ${activePrototypingMethod === "sheet" ? "bg-primary text-white" : "bg-gray-100"}`}>
                  <Factory className="h-4 w-4 mr-2" />
                  Sheet Metal
                </button>
              </div>
              <div className="flex-1 p-6 flex items-center justify-center">
                {activePrototypingMethod === "printing" && <div className="text-center">
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
                  </div>}
                {activePrototypingMethod === "cnc" && <div className="text-center">
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
                  </div>}
                {activePrototypingMethod === "sheet" && <div className="text-center">
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
                  </div>}
              </div>
              <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Video className="h-4 w-4 mr-2 text-red-500" />
                  <span className="text-sm">Live factory camera available</span>
                </div>
                <div className="text-sm font-bold">{count}+ prototypes delivered</div>
              </div>
            </div>
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
                <ToggleLeft className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "printing" ? "text-primary" : "text-gray-400"}`} onClick={() => setActivePrototypingMethod("printing")} />
                <ToggleRight className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "cnc" ? "text-primary" : "text-gray-400"}`} onClick={() => setActivePrototypingMethod("cnc")} />
                <ToggleRight className={`h-6 w-6 cursor-pointer ${activePrototypingMethod === "sheet" ? "text-primary" : "text-gray-400"}`} onClick={() => setActivePrototypingMethod("sheet")} />
              </div>
            </div>
            <Button className="group mt-4">
              Explore Prototyping Options
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Step 3: Scale with Confidence */}
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
                      <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                      <div className="absolute h-2 bg-primary rounded-full" style={{
                      width: "100%"
                    }}></div>
                      
                      <div className="absolute flex flex-col items-center" style={{
                      left: "0%",
                      top: "-40px"
                    }}>
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <Package className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium mt-2">Design</span>
                        <span className="text-xs text-gray-500">1-10 units</span>
                      </div>
                      
                      <div className="absolute flex flex-col items-center" style={{
                      left: "50%",
                      top: "-40px",
                      transform: "translateX(-50%)"
                    }}>
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <Package className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium mt-2">Prototype</span>
                        <span className="text-xs text-gray-500">50-500 units</span>
                      </div>
                      
                      <div className="absolute flex flex-col items-center" style={{
                      right: "0%",
                      top: "-40px"
                    }}>
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <Factory className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium mt-2">Production</span>
                        <span className="text-xs text-gray-500">1,000+ units</span>
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
      </div>
    </section>;
};
export default HowWeWork;