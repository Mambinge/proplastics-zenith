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
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/proplastics-logo.png";



const Services = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
     { name: "Investor Center", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slide-in-right">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
              <img src={logo} alt="Proplastics Zimbabwe" className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="ml-4 hover-lift">Get Quote</Button>
            <Button size="sm" className="ml-4 hover-lift">Shop Online</Button>
          </div>
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full hover-lift">Get Quote</Button>
            </div>
          </div>
        )}
      </nav>
      <div id="achievement" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      {/* Background Image with Overlay */}
      

      {/* Content */}
<div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in animate-delay-600">
       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in animate-delay-100">
            Privacy Policy
            
            
          </h1></div>

     
      
    </div>
    </header>
    
  );
 
    
    
  
};


export default Services;
