
import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const timelineSteps = [
  {
    title: "Concept & Design",
    subtitle: "Start Smart with DFM Analysis",
    description: [
      {
        tier: "Per Project Plan ($50/project)",
        features: [
          "2D/3D CAD/CAM design",
          "Basic DFM analysis to catch flaws early",
          "1 free consultation to align goals"
        ]
      },
      {
        tier: "Fusion Pro ($75/user/month)",
        features: [
          "AI-generated 3D models + AI-driven DFM revisions",
          "AI-powered simulations to predict risks"
        ]
      }
    ],
    visual: "Designer reviewing CAD models with client",
    durationRange: "2-5 days"
  },
  {
    title: "Prototyping & Testing",
    subtitle: "Build, Test, Iterate",
    description: [
      {
        tier: "Per Project Plan",
        features: [
          "Basic simulation testing",
          "Manufacturing assistance (cost on request)"
        ]
      },
      {
        tier: "Fusion Pro",
        features: [
          "Instant additive manufacturing (3D printing)",
          "Rapid prototyping with 24/7 support"
        ]
      },
      {
        tier: "Co-Creation Hub",
        features: [
          "Expert-guided prototyping: 1:1 partnership with engineers",
          "Intellectual property (IP) guidance for startups"
        ]
      }
    ],
    visual: "3D printer creating prototype parts",
    durationRange: "3-10 days"
  },
  {
    title: "Scale & Launch",
    subtitle: "From Prototype to Production",
    description: [
      {
        tier: "All Plans",
        features: [
          "Transparent manufacturing cost estimates",
          "24/7 support for urgent scaling needs"
        ]
      },
      {
        tier: "Co-Creation Hub",
        features: [
          "Priority access to production partners",
          "IP protection and licensing support"
        ]
      }
    ],
    visual: "Robotic assembly line with quality control",
    durationRange: "2-4 weeks",
    badge: "10M+ units delivered"
  }
];

const pricingTiers = [
  {
    name: "Per Project",
    price: "$50",
    unit: "per project",
    features: {
      design: "2D/3D CAD/CAM",
      dfmAnalysis: "Basic",
      prototyping: "Basic testing",
      support: "24/7 chat",
      bestFor: "Early-stage concepts"
    }
  },
  {
    name: "Fusion Pro",
    price: "$75",
    unit: "per user/month",
    features: {
      design: "AI-generated 3D models",
      dfmAnalysis: "AI-driven + revisions",
      prototyping: "Instant 3D printing",
      support: "24/7 priority",
      bestFor: "Iterative startups"
    }
  },
  {
    name: "Co-Creation Hub",
    price: "Custom",
    unit: "",
    features: {
      design: "1:1 expert collaboration",
      dfmAnalysis: "Advanced + IP guidance",
      prototyping: "Custom partnerships",
      support: "Dedicated engineer",
      bestFor: "Scalable ventures & enterprises"
    }
  }
];

export const Features = () => {
  const [viewMode, setViewMode] = useState<string>("timeline");
  
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            From Idea to Prototype: Your Journey with FusionLabs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pick your path—flexible plans for startups, innovators, and enterprises.
          </p>
        </div>

        <div className="mb-10">
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)} className="justify-center">
            <ToggleGroupItem value="timeline" aria-label="View as timeline">Timeline View</ToggleGroupItem>
            <ToggleGroupItem value="comparison" aria-label="View as comparison">Pricing Comparison</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {viewMode === "timeline" ? (
          <>
            {/* Mobile Timeline - Vertical Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                {timelineSteps.map((step, index) => (
                  <AccordionItem key={index} value={`step-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary text-white font-bold text-sm">
                          {index + 1}
                        </span>
                        <span className="font-semibold">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-11">
                        <h4 className="font-semibold text-lg text-accent mb-3">{step.subtitle}</h4>
                        
                        {step.badge && (
                          <div className="bg-primary/10 text-primary font-medium py-1 px-3 rounded-full inline-block mb-3">
                            {step.badge}
                          </div>
                        )}
                        
                        <div className="space-y-4">
                          {step.description.map((tier, tierIndex) => (
                            <div key={tierIndex} className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-medium mb-2">{tier.tier}</h5>
                              <ul className="space-y-1">
                                {tier.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-gray-500">
                          <p>Typical duration: {step.durationRange}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Desktop Timeline - Horizontal with steps */}
            <div className="hidden md:block relative">
              {/* Timeline connector */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

              {/* Timeline steps */}
              <div className="space-y-16">
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative grid grid-cols-2 gap-8 items-center"
                  >
                    <div className={`${index % 2 === 0 ? 'text-right' : 'order-2'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                        <h3 className="text-xl font-semibold text-accent mb-1">{step.title}</h3>
                        <h4 className="text-lg font-medium text-gray-700 mb-4">{step.subtitle}</h4>
                        
                        {step.badge && (
                          <div className="bg-primary/10 text-primary font-medium py-1 px-3 rounded-full inline-block mb-3">
                            {step.badge}
                          </div>
                        )}
                        
                        <div className="space-y-4">
                          {step.description.map((tier, tierIndex) => (
                            <div key={tierIndex}>
                              <h5 className="font-medium mb-2">{tier.tier}</h5>
                              <ul className="space-y-1">
                                {tier.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 text-primary font-medium">
                          <p>Typical duration: {step.durationRange}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 0 ? 'order-2' : ''}`}>
                      <div className="bg-gray-50 p-4 rounded-xl aspect-video flex items-center justify-center text-gray-500">
                        {step.visual}
                      </div>
                    </div>
                    
                    {/* Timeline marker */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8 mb-12 overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6">Feature</TableHead>
                  {pricingTiers.map((tier, index) => (
                    <TableHead key={index} className="w-1/6">
                      <div className="font-bold text-lg">{tier.name}</div>
                      <div className="font-bold text-xl text-primary">{tier.price}<span className="text-sm font-normal text-gray-500">{tier.unit ? ` ${tier.unit}` : ''}</span></div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Design</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>{tier.features.design}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DFM Analysis</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>{tier.features.dfmAnalysis}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prototyping</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>{tier.features.prototyping}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Support</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>{tier.features.support}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best For</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>{tier.features.bestFor}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg font-medium text-gray-700 mb-6">
              Not sure which plan fits? Take our 60-second quiz
            </p>
            <Button
              size="lg"
              onClick={scrollToQuoteForm}
              className="group"
            >
              Find Your Perfect Plan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
