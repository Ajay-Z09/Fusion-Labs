
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pricingTiers } from "./PricingTiers";

export const PricingComparisonTable = ({ scrollToQuoteForm }: { scrollToQuoteForm: () => void }) => {
  return (
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
  );
};
