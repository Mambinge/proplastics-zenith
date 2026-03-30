import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import SABS from "@/assets/certification-logos-1.png";
import SAPPMA from "@/assets/certification-logos-2.png";
import IFPA from "@/assets/certification-logos-3.png";
import SAZ from "@/assets/certification-logos-4.png";
import Aniversary from "@/assets/Mark-Proplastics-2026.png";
import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'; //
import { useNavigate } from 'react-router-dom';
import Privacy from "@/components/Privacy-Policy";
import ScrollReveal from "@/components/ScrollReveal";






const Hero = () => {
   const navigate = useNavigate(); // Initialize the hook
   const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Optional: Prevent default form submission behavior if the button is in a form
    event.preventDefault(); 
    
    // Navigate to a specific route defined in your router configuration
     navigate('/Privacy-Policy')
  };

 
  return (
    
    
    
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Proplastics manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-50% to-transparent" />
      </div>
      

      {/* Content */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <ScrollReveal animation="reveal-up" threshold={0}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              Zimbabwe's Leading Pipe Systems Manufacturer
            </div>
          </ScrollReveal>
          

          {/* Main Heading */}
          <ScrollReveal animation="reveal-up" delay={100} threshold={0}>
            <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Pipe systems that last
              <span className="block text-primary mt-2">Solutions for Africa</span>
            </h1>
          </ScrollReveal>
          

          {/* Description */}
          <ScrollReveal animation="reveal-up" delay={200} threshold={0}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Manufacturing premium PVC and HDPE pipe systems for water reticulation, 
              irrigation, mining, and construction across Southern Africa.
            </p>
          </ScrollReveal>
          <FloatingWhatsApp
      phoneNumber="+263 772521154" // Replace with your number
      accountName="Proplastics Sales"
      darkMode={true}
      notification={true}
      // ...other props
    />
         




          {/* CTA Buttons */}
          <ScrollReveal animation="reveal-up" delay={300} threshold={0}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover-lift">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={handleButtonClick} id="root" size="lg" variant="outline" className="hover-lift">
                Privacy Policy
              </Button>
            </div>
          </ScrollReveal>
          

          {/* Stats */}
          <ScrollReveal animation="reveal-up" delay={400} threshold={0}>
            <div className="grid grid-cols-5 gap-8 mt-12 pt-12 border-t border-border">
              {[SABS, SAPPMA, IFPA, SAZ, Aniversary].map((logo, index) => (
                <div key={index} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img
                    src={logo}
                    alt="Certification Logo"
                    className="max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

           
        </div>
        {/* Stats */}
          
      </div>
      
      
      
    </section>
    
    
  );
  
};


export default Hero;
