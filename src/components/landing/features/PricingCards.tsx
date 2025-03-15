
import React from "react";
import { PricingTierCard, pricingTiers } from "./PricingTiers";

interface PricingCardsProps {
  scrollToQuoteForm: () => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ scrollToQuoteForm }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {pricingTiers.map((tier, index) => (
        <PricingTierCard 
          key={index} 
          tier={tier} 
          scrollToQuoteForm={scrollToQuoteForm} 
        />
      ))}
    </div>
  );
};
