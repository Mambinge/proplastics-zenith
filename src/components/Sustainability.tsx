import { Leaf, Recycle, Droplets, Sun } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section id="sustainability" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <ScrollReveal animation="reveal-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
              <Leaf className="h-4 w-4" />
              Environmental Strategy
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Driving <span className="text-primary">Sustainable</span> Infrastructure
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At Proplastics, sustainability is woven into our manufacturing excellence. 
              We focus on creating piping systems that last generations while 
              minimizing our environmental footprint today.
            </p>
          </ScrollReveal>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 100 + 300}
            >
              <div className="p-8 bg-secondary/30 rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="h-14 w-14 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <initiative.icon className="h-7 w-7 text-green-600 group-hover:text-current font-bold" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Grid */}
        <ScrollReveal animation="reveal-up" delay={700}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center">
            <div className="space-y-1">
              <div className="text-5xl font-black text-primary">30%</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Recycled Content</div>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-primary/10 py-6 md:py-0">
              <div className="text-5xl font-black text-primary">50+</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Year Lifespan</div>
            </div>
            <div className="space-y-1">
              <div className="text-5xl font-black text-primary">100%</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Recyclable</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sustainability;
