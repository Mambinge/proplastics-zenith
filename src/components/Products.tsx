import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pvcImage from "@/assets/products-pvc.jpg";
import hdpeImage from "@/assets/products-hdpe.jpg";

const Products = () => {
  const productCategories = [
    {
      name: "PVC Pipe Systems",
      image: pvcImage,
      description: "Comprehensive range of PVC pipes and fittings for water supply, drainage, and sewerage systems",
      features: ["Pressure & non-pressure pipes", "Wide diameter range", "Corrosion resistant", "Long service life"],
      applications: "Water reticulation, irrigation, building drainage",
    },
    {
      name: "HDPE Pipe Systems",
      image: hdpeImage,
      description: "High-density polyethylene pipes for demanding applications in mining, telecommunications, and infrastructure",
      features: ["Flexible & durable", "Chemical resistant", "Leak-proof joints", "UV stabilized"],
      applications: "Mining, gas distribution, cable ducting, industrial",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive plastic piping solutions engineered for excellence
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl overflow-hidden border border-border hover-lift group ${
                index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{category.name}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Applications:</strong> {category.applications}
                  </p>
                  <Button variant="outline" className="w-full group/btn">
                    View Specifications
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in animate-delay-300">
          <Button size="lg" className="hover-lift">
            Download Complete Catalogue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
