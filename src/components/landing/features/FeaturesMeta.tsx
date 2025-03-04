import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PricingCards } from "./PricingCards";
import { PricingComparisonTable } from "./PricingComparisonTable";
import { FinalCTA } from "./FinalCTA";
export const FeaturesMeta = () => {
  const [viewMode, setViewMode] = useState<string>("cards");
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    quoteForm?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="pricing" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
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
          <ToggleGroup type="single" value={viewMode} onValueChange={value => value && setViewMode(value)} className="justify-center">
            <ToggleGroupItem value="cards" aria-label="View as cards">Product &amp; Pricing</ToggleGroupItem>
            <ToggleGroupItem value="comparison" aria-label="View as comparison">Comparison Table</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {viewMode === "cards" ? <PricingCards scrollToQuoteForm={scrollToQuoteForm} /> : <PricingComparisonTable scrollToQuoteForm={scrollToQuoteForm} />}
        
        {/* Final CTA Section */}
        <FinalCTA scrollToQuoteForm={scrollToQuoteForm} />
      </div>
    </section>;
};