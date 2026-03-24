import { useState } from "react";
import { Building2, History, ShieldCheck, ArrowRight, Target, Eye, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const options = [
    {
      id: "overview",
      icon: Building2,
      title: "Company Overview",
      subtitle: "Leading the industry since 1988",
      content: (
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground">
            <strong className="text-primary">Proplastics Zimbabwe Limited</strong> is the premier 
            manufacturer and supplier of plastic pipe systems and fittings in Zimbabwe and the broader 
            Southern African region.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-bold text-foreground mb-2">Our Vision</h4>
              <p className="text-sm text-muted-foreground">To be the recognized leader in the provision of world-class plastic piping systems in Southern Africa.</p>
            </div>
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-bold text-foreground mb-2">Our Mission</h4>
              <p className="text-sm text-muted-foreground">To deliver engineered plastic piping solutions that reliably build our continent's vital infrastructure.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "history",
      icon: History,
      title: "Our History",
      subtitle: "A legacy of growth and innovation",
      content: (
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground mb-6">
            With over three decades of manufacturing excellence, Proplastics has continually evolved 
            to meet the infrastructure demands of a growing continent.
          </p>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">1988</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-background/50 shadow-sm">
                <h4 className="font-bold text-foreground">Establishment</h4>
                <p className="text-sm text-muted-foreground mt-1">Founded as a subsidiary of the Murray & Roberts group, initially focusing on standard PVC pipes.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">2015</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-background/50 shadow-sm">
                <h4 className="font-bold text-foreground">ZSE Listing</h4>
                <p className="text-sm text-muted-foreground mt-1">Successfully unbundled and listed independently on the Zimbabwe Stock Exchange (PROL.zw).</p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-xs font-bold">2020+</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-background/50 shadow-sm">
                <h4 className="font-bold text-foreground">Modernization</h4>
                <p className="text-sm text-muted-foreground mt-1">Commissioned a state-of-the-art automated manufacturing plant, expanding our HDPE and continuous profile lines.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "governance",
      icon: ShieldCheck,
      title: "Corporate Governance",
      subtitle: "Transparency, ethics, and quality at our core",
      content: (
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground">
            At Proplastics, we believe that robust corporate governance is fundamental to creating long-term 
            value for our shareholders, employees, and the communities we serve. 
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-background/50 text-left">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Board of Directors</h4>
                <p className="text-sm text-muted-foreground">Oversight provided by a diverse board committed to King IV principles of strong ethical leadership.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-background/50 text-left">
              <Gem className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">ISO Certification</h4>
                <p className="text-sm text-muted-foreground">Certified in ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Health & Safety).</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Proplastics
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover who we are, where we come from, and how we operate.
          </p>
        </div>

        {/* The 3 Options - Interactive Tabs Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sidebar / Tab Triggers */}
            <div className="lg:col-span-4 space-y-4">
              {options.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl border transition-all duration-300 group flex items-start gap-4 hover-lift",
                    activeTab === index 
                      ? "bg-card border-primary/50 shadow-lg shadow-primary/5 scale-[1.02]" 
                      : "bg-background/40 border-border hover:bg-card hover:border-border/80"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl flex-shrink-0 transition-colors duration-300",
                    activeTab === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"
                  )}>
                    <option.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl font-bold transition-colors duration-300",
                      activeTab === index ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                    )}>
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                      {option.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={cn(
                    "h-5 w-5 shrink-0 self-center transition-all duration-300 opacity-0 -translate-x-4",
                    activeTab === index && "opacity-100 translate-x-0 text-primary"
                  )} />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              <div className="bg-card border border-border/80 rounded-3xl p-8 md:p-12 shadow-xl min-h-[450px]">
                {options.map((option, index) => (
                  <div 
                    key={option.id}
                    className={cn(
                      "transition-all duration-500",
                      activeTab === index ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 absolute translate-y-4 -z-10 pointer-events-none"
                    )}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                      <option.icon className="h-4 w-4" />
                      {option.title}
                    </div>
                    {option.content}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
