
import React from "react";
import { ArrowRight, Check, Beaker, Bot, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Pricing and feature data
export const pricingTiers = [
  {
    name: "Starter Plan",
    subtitle: "Per-Project Support",
    icon: Beaker, // Changed from Flask to Beaker which is available in lucide
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
    icon: Bot, // Changed from Robot to Bot which is available in lucide
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

export const PricingTierCard = ({ tier, scrollToQuoteForm }: { tier: typeof pricingTiers[0], scrollToQuoteForm: () => void }) => {
  const IconComponent = tier.icon;
  
  return (
    <div 
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
};
