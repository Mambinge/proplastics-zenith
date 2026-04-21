import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-industrial.jpg";
import { Shield, Lock, Eye, FileText, Scale } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content: "Proplastics Zimbabwe is committed to protecting your personal data and ensuring transparency in how we collect, use, and share your information. We implement robust security measures to safeguard your privacy."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "Our systems are designed with security in mind. We use industry-standard encryption and access controls to prevent unauthorized access to our corporate data and customer records."
    },
    {
      icon: Eye,
      title: "Usage Transparency",
      content: "We only collect data necessary for providing our products and services. This include contact details for processing enquiries and service performance data for system optimization."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      content: "Proplastics strictly adheres to the Cyber and Data Protection Act [Chapter 12:07] of Zimbabwe and other regional data protection regulations."
    },
    {
      icon: FileText,
      title: "Contact Us",
      content: "If you have any questions regarding our privacy practices, please contact our Data Protection Officer at info@proplastics.co.zw."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <PageHero 
          image={heroImg} 
          title="Privacy Policy" 
          subtitle="How we manage and protect your data at Proplastics Zimbabwe."
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <ScrollReveal key={index} animation="reveal-up" delay={index * 100}>
                <div className="flex gap-6 p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all duration-300 group">
                  <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <section.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="reveal-up" delay={600}>
            <div className="mt-16 p-8 bg-secondary/30 rounded-3xl border border-border text-center">
              <p className="text-sm text-muted-foreground">
                Last updated: March 2026. Proplastics reserves the right to update this policy periodically. 
                Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
