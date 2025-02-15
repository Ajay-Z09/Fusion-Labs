
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { QuoteFormValues, formSchema } from "./quote-form/types";
import { TrustBanner } from "./quote-form/TrustBanner";
import { QuoteFormFields } from "./quote-form/QuoteFormFields";

export const QuoteForm = () => {
  const { toast } = useToast();
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      projectStage: "",
      timeline: "",
      budget: "",
      quantity: "",
      projectDetails: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log(data);
    toast({
      title: "Quote Request Received",
      description: "Our team will contact you within 24 hours with your free DFM analysis.",
    });
    form.reset();
  };

  return (
    <section id="quote-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Get Your Free DFM Analysis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our engineering team will review your project and provide detailed manufacturing feedback within 24 hours.
          </p>
        </div>
        
        <TrustBanner />
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
            <QuoteFormFields form={form} />
            <Button type="submit" className="w-full">Submit Quote Request</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

