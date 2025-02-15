
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Services } from "@/components/landing/Services";
import { DFMSimulator } from "@/components/landing/DFMSimulator";
import { QuoteForm } from "@/components/landing/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Services />
      <DFMSimulator />
      <QuoteForm />
    </div>
  );
};

export default Index;

