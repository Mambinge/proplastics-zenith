import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle2 className="h-4 w-4" />
            Zimbabwe's Leading Pipe Systems Manufacturer
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in animate-delay-100">
            Quality Plastic Piping
            <span className="block text-primary mt-2">Solutions for Africa</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in animate-delay-200 max-w-2xl">
            Manufacturing premium PVC and HDPE pipe systems for water reticulation, 
            irrigation, mining, and construction across Southern Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <Button size="lg" className="group hover-lift">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              Request Catalogue
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border animate-fade-in animate-delay-400">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">35+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Products Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
