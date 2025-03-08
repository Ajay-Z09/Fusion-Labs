
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  industry: z.string().min(1, "Please select your industry"),
  projectStage: z.string().min(1, "Please select a project stage"),
  cadFile: z.instanceof(FileList).optional(),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
});

type QuoteFormValues = z.infer<typeof formSchema>;

const industries = [
  "Automotive",
  "Medical Devices",
  "Consumer Electronics",
  "Aerospace",
  "Industrial Equipment",
  "Other"
];

const projectStages = [
  "Initial Concept",
  "Design Phase",
  "Prototype Ready",
  "Production Ready",
  "Seeking Manufacturing Partner"
];

const trustElements = [
  "100% Confidentiality Guaranteed",
  "Free DFM Analysis",
  "No-Obligation Quote",
  "24/7 Support"
];

export const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      projectStage: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form data:", data);
      
      // Handle file upload if present
      let cadFileUrl = null;
      
      if (data.cadFile && data.cadFile.length > 0) {
        const file = data.cadFile[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        // Create a unique file path in the format: quote_submissions/{timestamp}_{filename}
        const filePath = `quote_submissions/${Date.now()}_${fileName}`;
        console.log("Uploading file to:", filePath);

        // Upload the CAD file
        const { error: uploadError } = await supabase.storage
          .from('quote_submissions')
          .upload(filePath, file);
          
        if (uploadError) {
          console.error("File upload error:", uploadError);
          throw uploadError;
        }
        
        // Get the public URL for the uploaded file
        const { data: urlData } = supabase.storage
          .from('quote_submissions')
          .getPublicUrl(filePath);
          
        cadFileUrl = urlData.publicUrl;
        console.log("File uploaded successfully, URL:", cadFileUrl);
      }
      
      // Submit form data to Supabase
      console.log("Inserting data into quote_submissions table");
      const { error } = await supabase
        .from('quote_submissions')
        .insert({
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          industry: data.industry,
          project_stage: data.projectStage,
          project_details: data.projectDetails,
          cad_file_url: cadFileUrl
        });
        
      if (error) {
        console.error("Database insert error:", error);
        throw error;
      }
      
      console.log("Form submitted successfully");
      setSubmitSuccess(true);
      
      toast({
        title: "Quote Request Received",
        description: "Our team will contact you within 24 hours with your free DFM analysis.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Your quote request couldn't be submitted. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        {submitSuccess ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Quote Request Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. Our team will review your project and get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitSuccess(false)} variant="outline">Submit Another Request</Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="projectStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Stage</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your project stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {projectStages.map((stage) => (
                            <SelectItem key={stage} value={stage}>
                              {stage}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
  
              <FormField
                control={form.control}
                name="cadFile"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Upload CAD File (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".stl,.obj,.step,.stp,.iges,.igs,.dwg,.dxf"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files?.length) {
                            onChange(files);
                          }
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project, specific requirements, and any challenges you're facing" 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </section>
  );
};
