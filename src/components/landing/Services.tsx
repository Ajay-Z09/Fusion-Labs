
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Printer, Factory, CheckCircle2, ArrowRight } from "lucide-react";

// Updated service features with more specific, industry-focused benefits
const serviceFeatures = {
  dfm: [
    "3D CAD Optimization with SolidWorks/Fusion 360",
    "48-Hour Rapid Prototyping (SLA/SLS/FDM)",
    "DFM Analysis & Tolerance Stack-up",
    "Material Selection & Cost Optimization",
  ],
  manufacturing: [
    "5-Axis CNC Machining (±0.001″ Tolerance)",
    "Production Injection Molding",
    "ISO 9001-Certified Assembly",
    "Full QC Documentation & Traceability",
  ],
};

const industryExamples = [
  {
    industry: "Automotive",
    description: "Precision drivetrain components with 99.9% reliability rate",
  },
  {
    industry: "Medical",
    description: "FDA-compliant surgical instruments and implants",
  },
  {
    industry: "Aerospace",
    description: "AS9100-certified critical flight components",
  },
];

const metrics = [
  "40% Faster Time-to-Market",
  "$2M+ Client Savings in 2023",
  "99.8% On-Time Delivery",
  "15+ Industries Served",
];

export const Services = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-lg font-semibold text-primary">{metric}</p>
            </div>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* DFM & Prototyping Card */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary" />
                  <Printer className="h-6 w-6 text-primary ml-[-8px]" />
                </div>
                <h3 className="text-2xl font-semibold text-accent">
                  DFM & Rapid Prototyping
                </h3>
              </div>
              <ul className="space-y-4 mb-6">
                {serviceFeatures.dfm.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium text-gray-700 mb-6">
                "FusionLabs' DFM review cut our tooling costs by 35% and helped us launch 6 weeks early."
                <br />
                <span className="text-sm text-gray-500">– John R., Automotive Tech Founder</span>
              </p>
              <Button 
                className="w-full sm:w-auto group"
                onClick={scrollToQuoteForm}
              >
                Optimize Your Design 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>

          {/* Manufacturing Services Card */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-accent">
                  Precision Manufacturing
                </h3>
              </div>
              <ul className="space-y-4 mb-6">
                {serviceFeatures.manufacturing.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <h4 className="font-semibold text-accent mb-3">Industry Solutions:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {industryExamples.map((example, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-primary">{example.industry}</p>
                      <p className="text-sm text-gray-600">{example.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                className="w-full sm:w-auto group"
                onClick={scrollToQuoteForm}
              >
                Request Production Quote 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust & Certifications Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-accent mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>AS9100 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>FDA Registered</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={scrollToQuoteForm}
            className="group"
          >
            Get Your Free DFM Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
