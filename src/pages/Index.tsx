
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Services } from "@/components/landing/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Services />
    </div>
  );
};

export default Index;
