
import React from "react";

export const TrustBadges = () => {
  return (
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
  );
};
