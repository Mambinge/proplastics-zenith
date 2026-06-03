import { Facebook, Instagram, Linkedin, Youtube, ExternalLink, Calendar, Heart, Share2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const socialFeed = [
    {
      platform: "LinkedIn",
      icon: Linkedin,
      iconColor: "text-blue-700 bg-blue-50",
      date: "2 days ago",
      text: "We are thrilled to announce the completion of our automated manufacturing line upgrade. This expansion increases our high-diameter HDPE pipe production capacity by 35%, helping us better support mining and irrigation projects across SADC! 🚀🔩",
      tag: "#Infrastructure #MiningAfrica #Growth"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      iconColor: "text-blue-600 bg-blue-50",
      date: "1 week ago",
      text: "Driving sustainable progress. Over 30% of our Ardbennie facility is now powered by clean solar energy, reducing our carbon footprint while we manufacture the pipe systems that last. 🌞🌱",
      tag: "#GoGreen #SolarEnergy #Sustainability"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      iconColor: "text-pink-600 bg-pink-50",
      date: "2 weeks ago",
      text: "Quality at our core. Every single Proplastics PVC and HDPE pipe carries the SABS and SAZ mark of excellence, backed by our industry-leading guarantee. Build with confidence. 🏆💧",
      tag: "#QualityFirst #WaterSystems #Engineering"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/proplasticszimbabwe", label: "Facebook", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Instagram, href: "https://www.instagram.com/proplasticszw/", label: "Instagram", color: "hover:bg-pink-600 hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/proplasticszim/", label: "LinkedIn", color: "hover:bg-blue-700 hover:text-white" },
    { icon: Youtube, href: "https://www.youtube.com", label: "YouTube", color: "hover:bg-red-600 hover:text-white" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual strip at side */}
      <div className="absolute top-0 right-0 w-2.5 h-full bg-gradient-to-b from-primary via-primary/50 to-primary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Who We Are */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="reveal-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Introduction
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Who We <span className="text-primary">Are</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="reveal-left" delay={150}>
              <div className="space-y-4 text-sm sm:text-base text-foreground leading-relaxed">
                <p className="font-bold text-foreground">
                  Proplastics Zimbabwe Limited is the premier manufacturer and supplier of world-class plastic piping systems and fittings in the Southern African region.
                </p>
                <p>
                  Established with roots dating back over 60 years, we have grown to become the industry-leading authority on pipe extrusion and rotomoulding solutions. Operating out of our highly modernized, automated facility in Harare, we design and supply critical pipelines for civil engineering, agriculture, mining, housing, and telecommunication networks.
                </p>
                <p>
                  Our commitment to excellence is supported by rigorous quality marks, including ISO 9001, ISO 14001, and ISO 45001 certifications. We combine cutting-edge technology with environmental stewardship to deliver piping solutions that reliably build our continent's infrastructure.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Social Media Window */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="reveal-right">
              {/* Connect Section Header */}
              <div className="bg-slate-50 border border-border p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-foreground">Stay Connected</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Follow our official feeds for live updates</p>
                </div>
                {/* Social Icon Grid */}
                <div className="flex gap-2">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`h-10 w-10 bg-white border border-border rounded-xl flex items-center justify-center text-foreground/70 transition-all duration-300 shadow-sm ${item.color} hover:scale-105`}
                    >
                      <item.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media Live Feed Window */}
            <ScrollReveal animation="reveal-right" delay={200}>
              <div className="bg-white border border-primary/20 rounded-3xl overflow-hidden shadow-lg">
                {/* Window header */}
                <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-300">Live Corporate Updates</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                    proplastics.co.zw <ExternalLink className="h-3 w-3" />
                  </span>
                </div>

                {/* Feed Items Container */}
                <div className="divide-y divide-slate-100 p-2 max-h-[380px] overflow-y-auto">
                  {socialFeed.map((post, idx) => (
                    <div key={idx} className="p-4 space-y-2 hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg ${post.iconColor}`}>
                            <post.icon className="h-4 w-4" />
                          </div>
                          <span className="font-extrabold text-xs text-slate-800">{post.platform} Update</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </div>
                      </div>
                      
                      <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                        {post.text}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-bold text-primary tracking-wide">
                          {post.tag}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Heart className="h-3.5 w-3.5 hover:text-red-500 transition-colors cursor-pointer" />
                          <Share2 className="h-3.5 w-3.5 hover:text-primary transition-colors cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
