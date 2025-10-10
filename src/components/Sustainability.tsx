import { Leaf, Recycle, Droplets, Sun } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Sustainability = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: "Recycling Programs",
      description: "Active plastic waste collection and recycling initiatives",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Manufacturing processes optimized for minimal water usage",
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "Solar-powered facilities and energy-efficient operations",
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Eco-friendly raw materials and responsible sourcing",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 animate-slide-in-left">
            <img
              src={sustainabilityImage}
              alt="Sustainable irrigation systems"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Environmental Stewardship
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Committed to Sustainability
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Proplastics Zimbabwe, we recognize our responsibility to protect the environment 
              while delivering quality products. Our sustainability initiatives span across our 
              entire value chain.
            </p>

            {/* Initiatives */}
            <div className="space-y-6 mb-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <initiative.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">30%</div>
                <div className="text-xs text-muted-foreground">Recycled Content</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-xs text-muted-foreground">Years Lifespan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Recyclable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
