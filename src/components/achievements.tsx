import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  Globe, 
  Settings, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";



const Achievement = () => {

  return (
    <section id="achievement" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {[
            { value: "36+", label: "Years Experience", icon: Clock },
            { value: "500+", label: "Product Range", icon: ShieldCheck },
            { value: "6+", label: "African Countries", icon: Globe },
            { value: "12 Years", label: "Product Guarantee", icon: Award },
            { value: "2000+", label: "Customers Served", icon: Users },
            { value: "Modern", label: "Production Plants", icon: Settings },
          ].map((stat, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 100}
            >
              <div className="bg-background/50 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 group flex flex-col items-center text-center h-full hover:shadow-xl hover:-translate-y-2">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <stat.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-500">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    
  );
};


export default Achievement;
