
import React, { useState } from "react";
import { ArrowRight, Check, Flask, Robot, Users, ChevronDown, ChevronUp, Calculator } from "lucide-react";
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
import { cn } from "@/lib/utils";

// Pricing and feature data
const pricingTiers = [
  {
    name: "Starter Plan",
    subtitle: "Per-Project Support",
    icon: Flask,
    price: "$50",
    unit: "base fee + $5/component",
    description: "For early-stage startups needing affordable, one-off prototyping.",
    features: [
      {
        category: "Design & DFM",
        items: [
          "2D/3D CAD/CAM modeling",
          "Basic DFM analysis and simulation testing"
        ]
      },
      {
        category: "Prototyping",
        items: [
          "Manufacturing assistance (cost quoted upfront)",
          "24/7 customer support"
        ]
      },
      {
        category: "Add-Ons",
        items: [
          "Advanced consultation ($25/hour)",
          "Material optimization reports"
        ]
      }
    ],
    testimonial: {
      quote: "Perfect for validating ideas without breaking the bank.",
      author: "EcoTech Startup Founder"
    },
    cta: "Start Your Project for $50",
    color: "bg-emerald-500"
  },
  {
    name: "Fusion Pro",
    subtitle: "AI-Powered Prototyping",
    icon: Robot,
    price: "$75",
    unit: "per user/month",
    description: "For scaling startups needing rapid iteration and advanced tools.",
    features: [
      {
        category: "AI-Driven Design",
        items: [
          "AI-generated 3D models",
          "AI-DFM analysis and revisions"
        ]
      },
      {
        category: "Speed & Precision",
        items: [
          "Instant additive manufacturing quotes",
          "AI-powered simulation testing"
        ]
      },
      {
        category: "Scalability",
        items: [
          "Rapid prototyping (48-hour turnaround)",
          "Manufacturing cost estimates on demand"
        ]
      }
    ],
    testimonial: {
      quote: "Cut our prototyping time by 40% with AI insights.",
      author: "Robotics Team Lead"
    },
    cta: "Try Fusion Pro Free for 7 Days",
    color: "bg-blue-500",
    popular: true
  },
  {
    name: "Co-Creation Hub",
    subtitle: "Expert-Guided Partnership",
    icon: Users,
    price: "Custom",
    unit: "Request Consultation",
    description: "For startups and enterprises needing end-to-end collaboration.",
    features: [
      {
        category: "Hands-On Support",
        items: [
          "1:1 prototyping partnerships with engineers",
          "Access to Fusion Pro tools at $50/user/month"
        ]
      },
      {
        category: "Advanced Services",
        items: [
          "Intellectual property strategy for startups",
          "Compliance and certification guidance"
        ]
      },
      {
        category: "Scalable Manufacturing",
        items: [
          "Seamless transition to full production"
        ]
      }
    ],
    testimonial: {
      quote: "Their engineers became an extension of our team.",
      author: "MedTech Innovator"
    },
    cta: "Book a Free Strategy Session",
    color: "bg-purple-500"
  }
];

// Pricing calculator initial state
const initialCalcState = {
  projectStage: "concept", // concept, prototype, production
  components: 1,
  addOns: {
    consultation: false,
    materialUpgrade: false,
    complianceCheck: false
  }
};

export const Features = () => {
  const [viewMode, setViewMode] = useState<string>("cards");
  const [calcState, setCalcState] = useState(initialCalcState);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  
  // Calculate estimated cost based on selections
  const calculateCost = () => {
    let baseCost = 50; // Base fee
    
    // Add per-component cost
    baseCost += calcState.components * 5;
    
    // Add costs for add-ons
    if (calcState.addOns.consultation) baseCost += 25;
    if (calcState.addOns.materialUpgrade) baseCost += 35;
    if (calcState.addOns.complianceCheck) baseCost += 50;
    
    // Adjust cost based on project stage
    if (calcState.projectStage === "prototype") baseCost *= 1.2;
    if (calcState.projectStage === "production") baseCost *= 1.5;
    
    return Math.round(baseCost);
  };
  
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Flexible Solutions for Every Stage of Your Prototyping Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From napkin sketches to market-ready prototypes—choose the plan that fits your startup's needs and budget.
          </p>
        </div>

        <div className="mb-10">
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)} className="justify-center">
            <ToggleGroupItem value="cards" aria-label="View as cards">Card View</ToggleGroupItem>
            <ToggleGroupItem value="comparison" aria-label="View as comparison">Comparison Table</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {viewMode === "cards" ? (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div 
                  key={index}
                  className={cn(
                    "relative rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl",
                    tier.popular ? "border-2 border-primary md:-mt-4 md:mb-4" : "border border-gray-200"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                      Popular Choice
                    </div>
                  )}
                  
                  <div className="p-6 bg-gray-50">
                    <div className="flex items-center mb-4">
                      <div className={cn("p-2 rounded-lg mr-3", tier.color)}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{tier.name}</h3>
                        <p className="text-gray-600">{tier.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.unit && <span className="text-gray-500 ml-1">{tier.unit}</span>}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {tier.features.map((category, catIndex) => (
                      <div key={catIndex}>
                        <h4 className="font-medium text-gray-900 mb-2">{category.category}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {tier.testimonial && (
                      <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600 mt-4">
                        "{tier.testimonial.quote}" <span className="block mt-2 text-sm font-medium">– {tier.testimonial.author}</span>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full mt-6 group"
                      variant={tier.popular ? "default" : "outline"}
                      onClick={scrollToQuoteForm}
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="overflow-x-auto mb-16">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Features</TableHead>
                  {pricingTiers.map((tier, index) => (
                    <TableHead key={index} className="w-1/4">
                      <div className="font-bold text-lg">{tier.name}</div>
                      <div className="text-primary font-bold text-xl">{tier.price}</div>
                      <div className="text-sm text-gray-500">{tier.unit}</div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Combine all feature categories for the comparison table */}
                {['Design & DFM', 'Prototyping', 'Speed & Precision', 'Scalability', 'Hands-On Support', 'Advanced Services'].map((category, catIndex) => (
                  <TableRow key={catIndex}>
                    <TableCell className="font-medium">{category}</TableCell>
                    {pricingTiers.map((tier, tierIndex) => {
                      const featureCategory = tier.features.find(fc => fc.category === category);
                      return (
                        <TableCell key={tierIndex}>
                          {featureCategory ? (
                            <ul className="space-y-1">
                              {featureCategory.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <Check className="h-4 w-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-medium">Get Started</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index}>
                      <Button 
                        size="sm" 
                        variant={tier.popular ? "default" : "outline"}
                        onClick={scrollToQuoteForm}
                      >
                        {tier.cta}
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        {/* Trust-Building Elements */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-center">
          <div className="bg-gray-50 px-6 py-3 rounded-full">
            <span className="font-semibold">500+ Prototypes Delivered</span>
          </div>
          <div className="bg-gray-50 px-6 py-3 rounded-full">
            <span className="font-semibold">98% Client Satisfaction</span>
          </div>
          <div className="bg-gray-50 px-6 py-3 rounded-full">
            <span className="font-semibold">ISO 9001 Certified</span>
          </div>
          <div className="bg-gray-50 px-6 py-3 rounded-full">
            <span className="font-semibold">GDPR-Compliant Processes</span>
          </div>
        </div>
        
        {/* Interactive Pricing Calculator */}
        <div className="max-w-2xl mx-auto mb-16">
          <button 
            onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
            className="flex items-center justify-between w-full px-6 py-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-colors hover:bg-gray-100"
          >
            <div className="flex items-center">
              <Calculator className="h-5 w-5 mr-3 text-primary" />
              <span className="font-medium">Interactive Pricing Calculator</span>
            </div>
            {isCalculatorOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          
          {isCalculatorOpen && (
            <div className="mt-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Estimate Your Project Cost</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Stage</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['concept', 'prototype', 'production'].map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        className={cn(
                          "py-2 px-3 text-sm border rounded-md focus:outline-none capitalize",
                          calcState.projectStage === stage
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        )}
                        onClick={() => setCalcState({...calcState, projectStage: stage as any})}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Components: {calcState.components}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={calcState.components}
                    onChange={(e) => setCalcState({...calcState, components: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>10</span>
                    <span>20</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add-Ons</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calcState.addOns.consultation}
                        onChange={(e) => setCalcState({
                          ...calcState, 
                          addOns: {...calcState.addOns, consultation: e.target.checked}
                        })}
                        className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-600">Advanced Consultation ($25/hour)</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calcState.addOns.materialUpgrade}
                        onChange={(e) => setCalcState({
                          ...calcState, 
                          addOns: {...calcState.addOns, materialUpgrade: e.target.checked}
                        })}
                        className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-600">Material Upgrades ($35)</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calcState.addOns.complianceCheck}
                        onChange={(e) => setCalcState({
                          ...calcState, 
                          addOns: {...calcState.addOns, complianceCheck: e.target.checked}
                        })}
                        className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm text-gray-600">Compliance Checks ($50)</span>
                    </label>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Your Estimated Cost:</span>
                    <span className="text-2xl font-bold text-primary">${calculateCost()}</span>
                  </div>
                  <Button 
                    className="w-full mt-4 group"
                    onClick={scrollToQuoteForm}
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Final CTA Section */}
        <div className="text-center bg-gray-50 p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold mb-3">Still Unsure Which Plan Fits Your Needs?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get a free DFM audit and personalized roadmap in 24 hours.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToQuoteForm}
            className="group"
          >
            Claim My Free Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
