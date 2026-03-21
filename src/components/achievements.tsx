import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import SABS from "@/assets/certification-logos-1.png";
import SAPPMA from "@/assets/certification-logos-2.png";
import IFPA from "@/assets/certification-logos-3.png";
import SAZ from "@/assets/certification-logos-4.png";
import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'; //



const Achievement = () => {

  return (
    <section id="achievement">
      {/* Background Image with Overlay */}
      

      {/* Content */}
      <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-6 gap- mt-12 pt-12 border-t border-border text-center animate-fade-in animate-delay-400">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">65+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4000+</div>
              <div className="text-sm text-muted-foreground">Products Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-sm text-muted-foreground">African Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">12 Years</div>
              <div className="text-sm text-muted-foreground">Product Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">2000+</div>
              <div className="text-sm text-muted-foreground">Customers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">AI </div>
              <div className="text-sm text-muted-foreground">Production Machinery</div>
            </div>
            
          </div>
          </div>
          
      
    </section>
    
  );
};


export default Achievement;
