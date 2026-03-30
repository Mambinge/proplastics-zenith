import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const PageHero = ({ image, title, subtitle, className }: PageHeroProps) => {
  return (
    <div className={cn("relative w-full h-[25vh] overflow-hidden", className)}>
      {/* Background Image */}
      <img
        src={image}
        alt={title || "Proplastics Header"}
        className="w-full h-full object-cover"
      />
      
      {/* White Gradient Overlay (top to bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/90" />

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          {title && (
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2 drop-shadow-sm animate-fade-in">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="max-w-xl text-muted-foreground font-medium animate-fade-in animate-delay-100">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PageHero;
