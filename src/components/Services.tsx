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
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'; //



const Services = () => {
  return (
    <section id="achievement" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      {/* Background Image with Overlay */}
      

      {/* Content */}
<div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in animate-delay-600">
       <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services Catergory
            
            
          </h1></div>
      <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-4 gap- mt-12 pt-12 border-t border-border animate-fade-in animate-delay-400">
         <div className="text-3xl font-bold text-primary mb-1"><img
                src={ProFlow}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            <div className="text-3xl font-bold text-primary mb-1"><img
                src={ProDrain}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
           <div className="text-3xl font-bold text-primary mb-1"><img
                src={ProTank}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
           <div className="text-3xl font-bold text-primary mb-1"><img
                src={CPVC}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>

              <div className="text-3xl font-bold text-primary mb-1"><img
                src={Proflowpic}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={ProDrainPic}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={Protankpic}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={cpvcpic}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
          
          </div>
          </div>
      
    </section>
    
  );
};


export default Services;
