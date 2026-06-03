import ProplasticsLogo from "@/assets/proplastics-logo.png";
import ProFlowLogo from "@/assets/proFlo-logos-2026-1.png";
import ProDrainLogo from "@/assets/proDrain-logos-1.png";
import CPVCLogo from "@/assets/cpvc-logo-2026.png";
import ProTankLogo from "@/assets/protank-Logos-2026-1.png";

import ProplasticsPic from "@/assets/hero-industrial.jpg";
import ProflowPic from "@/assets/ProfowDSC_0216.jpg";
import ProDrainPic from "@/assets/ProDrainDSC_0316.png";
import ProtankPic from "@/assets/ProtankDSC_0060.png";
import CpvcPic from "@/assets/CPVCDSC_0074.png";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
  const brands = [
    { 
      logo: ProplasticsLogo, 
      pic: ProplasticsPic, 
      title: "Proplastics",
      description: "Zimbabwe's leading pipe manufacturer, delivering vital water and civil infrastructure systems."
    },
    { 
      logo: ProTankLogo, 
      pic: ProtankPic,
      title: "Protank",
      description: "Advanced rotomoulded, food-grade water storage tanks ranging from 500L to 10,000L."
    },
    { 
      logo: ProFlowLogo, 
      pic: ProflowPic, 
      title: "Proflo",
      description: "Advanced pressure pipe systems engineered for agricultural irrigation and municipal water supply."
    },
    { 
      logo: ProDrainLogo, 
      pic: ProDrainPic,
      title: "Prodrain",
      description: "High-performance drainage and sewerage piping systems for civil engineering works."
    },
    { 
      logo: CPVCLogo, 
      pic: CpvcPic,
      title: "ProcPVC",
      description: "Premium chlorinated piping systems optimized for hot and cold plumbing systems."
    },
  ];

  return (
    <section id="brands" className="py-24 bg-white border-t border-border">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <ScrollReveal animation="reveal-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Our Brand Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Premium Product <span className="text-primary">Brands</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Discover Proplastics' core brand divisions, each engineered to address specific infrastructure and water storage challenges.
          </p>
        </ScrollReveal>
      </div>

      {/* Grid Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((item, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 120}
              className="flex"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/45 hover:shadow-xl transition-all duration-500 h-full flex flex-col group">
                
                {/* Logo Area */}
                <div className="p-6 flex flex-col items-center flex-grow">
                  <div className="h-20 w-full flex items-center justify-center p-2 mb-4 group-hover:scale-103 transition-transform duration-300">
                    <img 
                      src={item.logo} 
                      alt={`${item.title} Logo`} 
                      loading="lazy" 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground text-center mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Picture Area */}
                <div className="aspect-[4/3] relative overflow-hidden border-t border-border mt-auto">
                  <img 
                    src={item.pic} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
