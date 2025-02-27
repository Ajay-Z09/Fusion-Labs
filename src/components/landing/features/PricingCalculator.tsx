
import React, { useState } from "react";
import { Calculator, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export const PricingCalculator = ({ scrollToQuoteForm }: { scrollToQuoteForm: () => void }) => {
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
  
  return (
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
  );
};
