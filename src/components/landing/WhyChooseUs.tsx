
import React from "react";
import { Award, DollarSign, Leaf, Lock, Rocket, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Speed You Can't Match",
      points: [
        "48h prototyping turnaround (industry avg: 2 weeks).",
        "AI-driven simulations cut iteration time by 40%."
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Engineering Genius, On Tap",
      points: [
        "1:1 support from AS9100-certified engineers.",
        "Free DFM audits for your first project."
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Founder-Friendly Pricing",
      points: [
        "$50 base fee + $5/part—no hidden costs.",
        "Equity partnerships for high-potential startups."
      ]
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainable by Design",
      points: [
        "Zero-waste workflows & recycled materials.",
        "Carbon-neutral shipping to 15+ countries."
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "IP Protection, Guaranteed",
      points: [
        "Your ideas stay yours—NDA-backed process.",
        "Secure file encryption & GDPR compliance."
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Proven Results",
      points: [
        "98% client satisfaction | 30% faster launches.",
        "Featured in TechCrunch & Forbes."
      ]
    }
  ];

  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Why 500+ Startups Trust FusionLabs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just a vendor—we're your launch partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <span className="text-sm font-medium text-gray-500">TRUSTED BY</span>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Replace with actual company logos */}
                <div className="h-8 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Company 1</div>
                <div className="h-8 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Company 2</div>
                <div className="h-8 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Company 3</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <span className="text-sm font-medium text-gray-500">CERTIFICATIONS</span>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">ISO 9001</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">AS9100</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">FDA-compliant</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500 mb-1">LIVE COUNTER</div>
                <div className="text-lg font-semibold text-accent">
                  12 prototypes in progress | 27 shipped today
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            onClick={scrollToQuoteForm}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium"
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
