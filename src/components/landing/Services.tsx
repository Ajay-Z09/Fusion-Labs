
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Printer, Factory, CheckCircle2 } from "lucide-react";

const serviceFeatures = {
  dfm: [
    "DFM Analysis: Optimize designs for cost, material efficiency, and production scalability.",
    "3D CAD Modeling: Create manufacturable designs with tools like SolidWorks or Fusion 360.",
    "Prototyping: 3D Printing (SLA, SLS, FDM), CNC Machined Prototypes, Functional Testing & Iteration",
    "Compliance Support: Ensure designs meet industry standards (ISO, FDA, etc.).",
  ],
  manufacturing: [
    "CNC Machining: High-tolerance parts in metals, plastics, and composites.",
    "Injection Molding: Low-to-high volume production of plastic components.",
    "Sheet Metal Fabrication: Laser cutting, bending, welding.",
    "Assembly & Quality Control: Full product integration with ISO-certified inspections.",
  ],
};

const benefits = [
  "Single Source: Seamlessly transition from prototyping to production without vendor hopping.",
  "15% Avg. Cost Savings: DFM insights reduce material waste and tooling expenses.",
  "30% Faster Launch: Agile workflows for rapid iteration and scaling.",
  "Certified Quality: ISO 9001-compliant processes with traceability.",
];

export const Services = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            From Design Refinement to Full-Scale Production—We've Got You Covered
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with us to turn your vision into a manufacturable, market-ready product.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* DFM & Prototyping Card */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
                <Printer className="h-6 w-6 text-primary ml-[-8px]" />
              </div>
              <h3 className="text-2xl font-semibold text-accent">
                Design for Manufacturability (DFM) & Rapid Prototyping
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
              Why It Matters: Fix design flaws early—avoid costly revisions and delays in production.
            </p>
            <Button 
              className="w-full sm:w-auto"
              onClick={scrollToQuoteForm}
            >
              Optimize Your Design →
            </Button>
          </Card>

          {/* Manufacturing Services Card */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-accent">
                Precision Manufacturing & Scalable Production
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
            <p className="text-lg font-medium text-gray-700 mb-6">
              Why It Matters: From prototypes to 10,000+ units—maintain quality while scaling effortlessly.
            </p>
            <Button 
              className="w-full sm:w-auto"
              onClick={scrollToQuoteForm}
            >
              Request a Production Quote →
            </Button>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl p-8 mb-24 shadow-sm">
          <h3 className="text-2xl font-bold text-accent text-center mb-12">
            Why Partner with Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-accent mb-4">
            Ready to Streamline Your Product Development?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free DFM audit for your design or a manufacturing quote tailored to your needs.
          </p>
          <Button 
            size="lg"
            onClick={scrollToQuoteForm}
          >
            Start with a Free Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
};
