import { Building2, Award, Globe, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Building2,
      title: "Industry Leader",
      description: "Zimbabwe's premier manufacturer of plastic pipe systems since 1988",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified with rigorous quality control at every production stage",
    },
    {
      icon: Globe,
      title: "Regional Reach",
      description: "Serving Southern Africa with reliable distribution networks",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to innovation and customer service",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Proplastics Zimbabwe
          </h2>
          <p className="text-lg text-muted-foreground">
            Building Africa's infrastructure with innovative plastic piping solutions
          </p>
        </div>

        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-16 animate-scale-in animate-delay-100">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border hover-lift">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <strong className="text-primary">Proplastics Zimbabwe Limited</strong> is the leading 
              manufacturer and supplier of plastic pipe systems and fittings in Zimbabwe and the broader 
              Southern African region.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              With over three decades of manufacturing excellence, we specialize in producing high-quality 
              PVC and HDPE piping systems used in water reticulation, irrigation, mining operations, 
              telecommunications infrastructure, and construction projects.
            </p>
            <p className="text-foreground leading-relaxed">
              Our commitment to quality, innovation, and sustainability has made us the trusted choice 
              for municipalities, contractors, and businesses throughout the region.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
