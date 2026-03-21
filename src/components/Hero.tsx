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
import { useNavigate } from 'react-router-dom'; // Import the hook
import Privacy from "@/components/Privacy-Policy";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";






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
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>
      

      {/* Content */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle2 className="h-4 w-4" />
            Zimbabwe's Leading Pipe Systems Manufacturer
          </div>
          

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in animate-delay-100">
            Pipe systems that last
            <span className="block text-primary mt-2">Solutions for Africa</span>
            
          </h1>
          

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in animate-delay-200 max-w-2xl">
            Manufacturing premium PVC and HDPE pipe systems for water reticulation, 
            irrigation, mining, and construction across Southern Africa.
          </p>
          <FloatingWhatsApp
      phoneNumber="+263 772521154" // Replace with your number
      accountName="Proplastics Sales"
      darkMode={true}
      notification={true}
      // ...other props
    />
         




          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <Button size="lg" className="group hover-lift">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={handleButtonClick} id="root" size="lg" variant="outline" className="hover-lift">
              Privacy Policy
              
            </Button>
            

          </div>
          

          {/* Stats */}
          <div className="grid grid-cols-5 gap- mt-12 pt-12 border-t border-border animate-fade-in animate-delay-400">
            
            
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={SABS}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={SAPPMA}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={IFPA}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={SAZ}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1"><img
                src={Aniversary}
                alt="Proplastics manufacturing facility"
                className="w-full h-full object-cover"
              /></div>
            
            </div>
          </div>

           
        </div>
        {/* Stats */}
          
      </div>
      
      
      
    </section>
    
    
  );
  
};


export default Hero;
