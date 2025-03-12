import React from "react";
import { Award, DollarSign, Leaf, Lock, Rocket, Lightbulb } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
        "$50-500 per project—no hidden costs.",
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
