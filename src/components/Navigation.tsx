import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/proplastics-logo.png";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import React from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Investor Center", href: "/investor-centre" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.substring(1);
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false);
        }
      }
    } else if (href === "/") {
      if (location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };
  interface NavItem {
  title: string;
  url: string;
  subItems?: NavItem[]; // Optional sub-items for dropdown
}


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slide-in-right">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150 z-50" 
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, "/")} 
              className="flex items-center"
            >
              <img src={logo} alt="Proplastics Zimbabwe" className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "transition-all duration-300 font-semibold text-xs uppercase tracking-wide relative py-1 mb-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
                    isActive 
                      ? "text-primary after:w-[60%] after:mx-auto after:absolute after:bottom-0 after:left-[20%] after:h-[1.5px] after:bg-primary" 
                      : "text-foreground/70 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:after:w-[60%] hover:after:left-[20%]"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="ml-4 hover-lift font-bold uppercase tracking-tighter bg-slate-900 text-white hover:bg-slate-800 border-0">Get Quote</Button>
            </a>
            <Button variant="outline" size="sm" className="ml-3 hover-lift border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-tighter">Shop Online</Button>
          </div>
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-menu" className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg transition-colors font-medium",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button className="w-full hover-lift">Get Quote</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
