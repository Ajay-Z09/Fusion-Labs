
import { useState, useEffect } from "react";
import SectionHeader from "./how-we-work/SectionHeader";
import DesignStep from "./how-we-work/DesignStep";
import PrototypingStep from "./how-we-work/PrototypingStep";
import ProductionStep from "./how-we-work/ProductionStep";

const HowWeWork = () => {
  const [count, setCount] = useState(527);

  // Simulate counter incrementing
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 30000); // Increment every 30 seconds

    return () => clearTimeout(interval);
  }, [count]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <DesignStep />
        <PrototypingStep count={count} />
        <ProductionStep />
      </div>
    </section>
  );
};

export default HowWeWork;
