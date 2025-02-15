
import { CheckCircle2 } from "lucide-react";

const trustElements = [
  "100% Confidentiality Guaranteed",
  "Free DFM Analysis",
  "No-Obligation Quote",
  "24/7 Support"
];

export const TrustBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {trustElements.map((element, index) => (
        <div 
          key={index}
          className="flex items-center space-x-2 text-gray-600 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <span>{element}</span>
        </div>
      ))}
    </div>
  );
};

