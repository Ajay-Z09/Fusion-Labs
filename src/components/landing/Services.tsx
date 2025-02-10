
import { Card } from "@/components/ui/card";
import { Layers, TestTube2, Settings } from "lucide-react";

const services = [
  {
    title: "Product Design & Engineering",
    description: "Industrial design, 3D CAD modeling, and DFM analysis. Material selection and prototyping.",
    icon: Layers,
  },
  {
    title: "Prototyping & Testing",
    description: "Rapid prototyping (3D printing, CNC machining). Functional testing and compliance certification.",
    icon: TestTube2,
  },
  {
    title: "Manufacturing & Assembly",
    description: "Injection molding, sheet metal fabrication, precision machining. Quality-controlled assembly and logistics support.",
    icon: Settings,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-accent mb-16">
          Full-Cycle Innovation, Tailored to You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
