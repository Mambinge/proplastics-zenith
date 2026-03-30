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
    <div className={cn("relative w-full h-[45vh] overflow-hidden", className)}>
      {/* Background Image */}
      <img
        src={image}
        alt={title || "Proplastics Header"}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="max-w-2xl text-lg text-white/85 font-medium drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PageHero;
