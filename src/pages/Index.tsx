
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Services } from "@/components/landing/Services";
import { QuoteForm } from "@/components/landing/QuoteForm";
import HowWeWork from "@/components/landing/HowWeWork";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowWeWork />
      <Features />
      <WhyChooseUs />
      <Services />
      <QuoteForm />
    </div>
  );
};

export default Index;
