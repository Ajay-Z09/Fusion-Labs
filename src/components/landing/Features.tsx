
import { Check } from "lucide-react";

const features = [
  {
    title: "End-to-End Solutions",
    description: "Design, prototyping, testing, and manufacturing under one roof.",
  },
  {
    title: "Industry Expertise",
    description: "10+ years serving aerospace, automotive, consumer electronics, and medical devices.",
  },
  {
    title: "Cost & Time Efficiency",
    description: "Optimize designs for manufacturability early to avoid costly revisions.",
  },
  {
    title: "Scalable Production",
    description: "From small batches to high-volume orders, powered by cutting-edge tech.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-accent mb-4">
          Your Vision, Our Expertise—Seamlessly Integrated
        </h2>
        <div className="mt-12 space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
