import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProFlow from "@/assets/proFlo-logos-2026-1.png";
import ProDrain from "@/assets/proDrain-logos-1.png";
import CPVC from "@/assets/cpvc-logo-2026.png";
import ProTank from "@/assets/protank-Logos-2026-1.png";
import Proflowpic from "@/assets/ProfowDSC_0216.jpg";
import ProDrainPic from "@/assets/ProDrainDSC_0316.png";
import Protankpic from "@/assets/ProtankDSC_0060.png";
import cpvcpic from "@/assets/CPVCDSC_0074.png";
import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';
import ScrollReveal from "@/components/ScrollReveal";



const Services = () => {
  return (
    <section id="achievement" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      {/* Background Image with Overlay */}
      

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <ScrollReveal animation="reveal-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Product <span className="text-primary">Brands</span>
          </h1>
        </ScrollReveal>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              img: ProFlow, 
              pic: Proflowpic, 
              title: "ProFlow Systems",
              description: "Advanced pressure pipe systems for water distribution and irrigation."
            },
            { 
              img: ProDrain, 
              pic: ProDrainPic,
              title: "ProDrain Solutions",
              description: "High-performance drainage and sewerage piping for infrastructure projects."
            },
            { 
              img: ProTank, 
              pic: Protankpic,
              title: "ProTank Storage",
              description: "Durable, food-grade water storage tanks for domestic and industrial use."
            },
            { 
              img: CPVC, 
              pic: cpvcpic,
              title: "FlowGuard cPVC",
              description: "Premium hot and cold water plumbing solutions for modern buildings."
            },
          ].map((item, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 150}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Logo Area */}
                <div className="p-8 pb-4 flex flex-col items-center">
                  <div className="h-28 w-full flex items-center justify-center p-2 mb-4 transition-transform duration-500 group-hover:scale-110">
                    <img 
                      src={item.img} 
                      alt={`${item.title} Logo`} 
                      loading="lazy" 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Visual Area */}
                <div className="mt-auto aspect-[4/3] relative overflow-hidden border-t border-border">
                  <img 
                    src={item.pic} 
                    alt={item.title} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
