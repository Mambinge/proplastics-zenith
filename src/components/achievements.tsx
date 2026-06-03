import { 
  Clock, 
  Award, 
  Settings, 
  ShieldCheck,
  MapPin
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Achievement = () => {
  const stats = [
    { value: "60+ Years", label: "Industry Experience", icon: Clock },
    { value: "500+", label: "Products in Range", icon: Settings },
    { value: "60 Years", label: "Pipe Guarantee", icon: ShieldCheck },
    { value: "12 Years", label: "Product Guarantee", icon: Award },
    { value: "5", label: "Branches in Zimbabwe", icon: MapPin },
  ];

  return (
    <section id="achievement" className="w-full bg-primary/[0.04] border-y border-primary/10 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              animation="reveal-up" 
              delay={index * 100}
              className="flex"
            >
              <div className="flex-1 bg-white p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group flex flex-col items-center text-center shadow-sm hover:shadow-md">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
