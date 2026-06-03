import { ArrowRight, Waves, Construction, ShieldAlert, Sliders, Layers, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pvcPic from "@/assets/products-pvc.jpg";
import hdpePic from "@/assets/products-hdpe.jpg";
import protankPic from "@/assets/ProtankDSC_0060.png";
import miningPic from "@/assets/hero-industrial.jpg";
import proflowPic from "@/assets/ProfowDSC_0216.jpg";
import prodrainPic from "@/assets/ProDrainDSC_0316.png";
import ScrollReveal from "@/components/ScrollReveal";

const Products = () => {
  const productRanges = [
    {
      name: "Civils",
      icon: Construction,
      image: prodrainPic,
      description: "High-performance drainage, municipal mainlines, and stormwater piping infrastructure.",
      tab: "fittings"
    },
    {
      name: "Irrigation",
      icon: Waves,
      image: proflowPic,
      description: "PVC-U pressure pipes and HDPE rolls optimized for commercial and agricultural systems.",
      tab: "hdpe"
    },
    {
      name: "Mining",
      icon: ShieldAlert,
      image: miningPic,
      description: "Heavy-duty pressure and flanged pipes designed to transport slurries and chemicals.",
      tab: "hdpe"
    },
    {
      name: "Casings",
      icon: Sliders,
      image: pvcPic,
      description: "Threaded PVC casing and slotted screens engineered for water-well and borehole projects.",
      tab: "pvc"
    },
    {
      name: "Ducting",
      icon: Layers,
      image: hdpePic,
      description: "Reliable conduit systems protecting fiber optic cabling and electrical lines.",
      tab: "pvc"
    },
    {
      name: "Tanks",
      icon: Droplet,
      image: protankPic,
      description: "Food-grade, UV-stabilized rotomoulded water storage systems for backups.",
      tab: "protank"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="reveal-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Product Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Our Core <span className="text-primary">Product Range</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Engineering plastic piping systems and storage tanks certified to national and international standards.
            </p>
          </ScrollReveal>
        </div>

        {/* 3x2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productRanges.map((range, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 100}
              className="flex"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500 h-full flex flex-col group">
                
                {/* Visual Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={range.image}
                    alt={range.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-lg bg-primary text-white">
                      <range.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-extrabold text-base uppercase tracking-wider text-white drop-shadow">
                      {range.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                    {range.description}
                  </p>

                  <Link to={`/products?tab=${range.tab}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between hover:bg-primary/5 hover:text-primary group/btn border-t border-slate-100 pt-4 mt-auto rounded-none text-xs font-bold uppercase tracking-wider"
                    >
                      Explore {range.name}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Custom Solutions CTA banner */}
        <ScrollReveal animation="reveal-up" delay={400} className="mt-16 max-w-6xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 relative z-10">
              Need a <span className="text-primary">Custom Solution?</span>
            </h3>
            <p className="text-slate-300 mb-8 relative z-10 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
              Our specialized technical team can help you select, custom-fabricate, and design piping networks to meet any custom industrial scale requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="relative z-10 hover-lift h-12 px-8 text-xs font-extrabold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white border-0">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Products;
