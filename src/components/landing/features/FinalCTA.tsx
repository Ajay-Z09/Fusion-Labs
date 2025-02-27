
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = ({ scrollToQuoteForm }: { scrollToQuoteForm: () => void }) => {
  return (
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
  );
};
