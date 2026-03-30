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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services Category
          </h1>
        </ScrollReveal>
      </div>
      <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
          {[
            { img: ProFlow, pic: Proflowpic },
            { img: ProDrain, pic: ProDrainPic },
            { img: ProTank, pic: Protankpic },
            { img: CPVC, pic: cpvcpic },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <ScrollReveal animation="reveal-up" delay={index * 100}>
                <div className="h-16 flex items-center justify-center p-2 mb-4 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={item.img} alt="Service Logo" className="max-h-full object-contain" />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="reveal-scale" delay={index * 150 + 200}>
                <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-lg group">
                  <img src={item.pic} alt="Service Visual" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            </React.Fragment>
          ))}
        </div>
          </div>
      
    </section>
    
  );
};


export default Services;
