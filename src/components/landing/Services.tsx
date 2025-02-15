
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  Award
} from "lucide-react";

const launchPackages = [
  {
    title: '"Fail Fast" Prototyping Kit',
    icon: <Zap className="h-6 w-6 text-primary" />,
    description: "3 rapid prototypes + 2 DFM audits | Perfect for early-stage validation",
    features: [
      "3 SLA/SLS Prototypes (48hr turnaround)",
      "2 Comprehensive DFM Reviews",
      "Material Selection Guidance",
      "Cost Optimization Analysis",
    ],
    price: "$1,499/month",
    altPrice: "0 upfront – pay 5% of your first raise",
    buttonText: "Start Prototyping",
  },
  {
    title: '"Scale Fast" Manufacturing',
    icon: <Package className="h-6 w-6 text-primary" />,
    description: "Unlimited design iterations + 30-day production guarantee",
    features: [
      "Unlimited CAD & DFM Iterations",
      "30-Day Production Guarantee",
      "Quality Control Documentation",
      "Production Cost Optimization",
    ],
    price: "Custom Quote",
    buttonText: "Scale Production",
    featured: true,
  },
  {
    title: '"Launch Accelerator"',
    icon: <Rocket className="h-6 w-6 text-primary" />,
    description: "Full launch support: DFM + compliance + distributor intros",
    features: [
      "Complete DFM & Manufacturing",
      "Compliance Documentation",
      "Distributor Introductions",
      "Go-to-Market Strategy Support",
    ],
    price: "Equity-Based Options",
    buttonText: "Accelerate Launch",
  },
];

const metrics = [
  "40+ Successful Product Launches",
  "30-Day Production Guarantee",
  "24/7 Engineering Support",
  "100% Quality Assurance",
];

export const Services = () => {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Launch Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From prototype to production—choose the package that fits your launch strategy
          </p>
        </div>

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

        {/* Launch Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {launchPackages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${
                pkg.featured ? 'border-primary shadow-md' : ''
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-accent">
                    {pkg.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  {pkg.altPrice && (
                    <div className="text-sm text-gray-500">
                      or {pkg.altPrice}*
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full group ${pkg.featured ? 'bg-primary hover:bg-primary/90' : ''}`}
                  onClick={scrollToQuoteForm}
                >
                  {pkg.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Award className="h-5 w-5 text-primary" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Money-Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={scrollToQuoteForm}
            className="group"
          >
            Compare Launch Packages
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
