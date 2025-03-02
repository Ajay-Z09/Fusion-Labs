
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import HowWeWork from "@/components/landing/HowWeWork";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import { QuoteForm } from "@/components/landing/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowWeWork />
      <Features />
      <WhyChooseUs />
      <QuoteForm />
    </div>
  );
};

export default Index;
