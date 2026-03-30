import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import SABS from "@/assets/certification-logos-1.png";
import SAPPMA from "@/assets/certification-logos-2.png";
import IFPA from "@/assets/certification-logos-3.png";
import SAZ from "@/assets/certification-logos-4.png";
import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';
import ScrollReveal from "@/components/ScrollReveal";



const Achievement = () => {

  return (
    <section id="achievement">
      {/* Background Image with Overlay */}
      

      {/* Content */}
      <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 pt-12 border-t border-border text-center">
          {[
            { value: "36+", label: "Years Experience" },
            { value: "500+", label: "Product Range" },
            { value: "6+", label: "African Countries" },
            { value: "12 Years", label: "Product Guarantee" },
            { value: "2000+", label: "Customers Served" },
            { value: "Modern", label: "Production Machinery" },
          ].map((stat, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 100}
            >
              <div className="hover-lift">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
          
      
    </section>
    
  );
};


export default Achievement;
