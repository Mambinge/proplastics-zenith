import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pvcImage from "@/assets/products-pvc.jpg";
import hdpeImage from "@/assets/products-hdpe.jpg";
import protankImage from "@/assets/ProtankDSC_0060.JPG";

const Products = () => {
  const featuredCategories = [
    {
      name: "PVC Pipe Systems",
      image: pvcImage,
      description: "Complete solutions for water reticulation, borehole casing, and drainage.",
      features: ["Sewer & Drain", "Borehole Casing", "Pressure Pipes"],
    },
    {
      name: "HDPE Pipe Systems",
      image: hdpeImage,
      description: "Durable piping for mining, industrial, and telecommunications infrastructure.",
      features: ["Mining Pipes", "Gas Distribution", "Cable Ducting"],
    },
    {
      name: "ProTank Storage",
      image: protankImage,
      description: "Premium vertical water storage solutions for domestic and industrial use.",
      features: ["500L - 10,000L", "Food Grade", "UV Resistant"],
    },
  ];

  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Product Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Proplastics manufactures a comprehensive range of plastic piping systems 
              certified to international standards.
            </p>
          </div>
          <Link to="/products" className="animate-fade-in">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {category.description}
                </p>

                <div className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to={`/products#${category.name.split(' ')[0].toLowerCase()}`}>
                  <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 group/btn">
                    Details
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-primary text-primary-foreground text-center relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Need a Custom Solution?</h3>
          <p className="mb-6 opacity-90 relative z-10 max-w-2xl mx-auto">
            Our technical team can help you design and select the perfect piping system for your specific project requirements.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="relative z-10 hover-lift">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
