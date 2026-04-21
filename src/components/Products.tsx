import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pvcImage from "@/assets/products-pvc.jpg";
import hdpeImage from "@/assets/products-hdpe.jpg";
import protankImage from "@/assets/ProtankDSC_0060.JPG";
import heroImg from "@/assets/hero-industrial.jpg";
import proflowImg from "@/assets/ABOUTUSLANDING.png";
import prodrainImg from "@/assets/ProDrainDSC_0316.JPG";
import waterSewerageImg from "@/assets/PRODUCT-RANGELANDING.jpg";
import telecomImg from "@/assets/ProfowDSC_0216.jpg";

const Products = () => {
  const productSolutions = [
    {
      name: "Mining",
      image: heroImg,
      description: "Durable pipes designed to withstand chemical and abrasive environments in mining operations.",
      features: ["Pressure Pipes", "Abrasive Resistant", "Chemical Proof"],
    },
    {
      name: "Irrigation",
      image: proflowImg,
      description: "Sustainable water management systems for efficient crop and livestock farming.",
      features: ["Drip Irrigation", "Dragline Hose", "PVC-U Pressure"],
    },
    {
      name: "Borehole Drilling",
      image: pvcImage,
      description: "Specialized PVC casings and screens used in the construction of water boreholes.",
      features: ["Class 9 - 18", "Threaded Casings", "Sand Screens"],
    },
    {
      name: "Telecommunications",
      image: telecomImg,
      description: "Protective PVC ducting solutions for fiber optic and electrical cable networks.",
      features: ["Fiber Ducting", "Cable Protectors", "Underground Trays"],
    },
    {
      name: "Civils & Infrastructure",
      image: prodrainImg,
      description: "High-performance pipes for large-scale civil engineering and municipal infrastructure.",
      features: ["Stormwater", "Culverts", "Municipal Mainline"],
    },
    {
      name: "Building & Plumbing",
      image: hdpeImage,
      description: "Reliable piping and fittings for residential, commercial, and industrial structures.",
      features: ["Waste Systems", "Soil & Vent", "Hot & Cold Water"],
    },
    {
      name: "Water & Sewerage",
      image: waterSewerageImg,
      description: "Comprehensive solutions for transport of clean water and waste management.",
      features: ["Sewer Pipe", "Water Main", "Non-Pressure PVC"],
    },
    {
      name: "Domestic Storage",
      image: protankImage,
      description: "Focuses on ProTank products and septic systems for household water security.",
      features: ["ProTank Range", "Septic Tanks", "UV Protected"],
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const scrollItems = [...productSolutions, ...productSolutions];

  return (
    <section id="products" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Product Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Proplastics manufactures a comprehensive range of plastic piping systems 
              certified to international standards across all major sectors.
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Auto-scrolling Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Infinite Scroll Wrapper */}
        <div className="flex w-fit hover:[animation-play-state:paused] animate-marquee">
          {scrollItems.map((solution, index) => (
            <div
              key={`${solution.name}-${index}`}
              className="w-[350px] md:w-[400px] flex-shrink-0 px-4"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Solution
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold text-foreground mb-2">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6 flex-grow">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to="/products">
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary/5 group/btn border-t border-border/50 pt-4 mt-auto rounded-none">
                      Explore {solution.name}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="p-10 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h3 className="text-3xl font-bold mb-4 relative z-10">Need a <span className="text-primary">Custom Solution?</span></h3>
          <p className="text-slate-300 mb-8 relative z-10 max-w-2xl mx-auto text-lg">
            Our technical team can help you design and select the perfect piping system for your specific project requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="relative z-10 hover-lift h-14 px-10 font-bold uppercase tracking-wider">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
