import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import Achievements from "@/components/achievements";
import PropServices from "@/components/Services";
import ScrollReveal from "@/components/ScrollReveal";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";

const Index = () => {
  const quickCallNumber = "+263242621651";

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ScrollReveal animation="reveal-up">
          <About />
        </ScrollReveal>
        <ScrollReveal animation="reveal-scale">
          <Achievements />
        </ScrollReveal>
        <ScrollReveal animation="reveal-up">
          <Products />
        </ScrollReveal>
        <ScrollReveal animation="reveal-left">
          <PropServices />
        </ScrollReveal>
        <ScrollReveal animation="reveal-right">
          <Sustainability />
        </ScrollReveal>
      </main>

      {/* Mobile sticky conversion bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            href={`tel:${quickCallNumber}`}
            className="flex items-center justify-center gap-1.5 rounded-lg bg-card px-2 py-3 text-xs font-semibold text-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Call Proplastics sales"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={getWhatsAppUrl("Hello! I'd like to request a quote from Proplastics.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-green-600 px-2 py-3 text-xs font-semibold text-white hover:bg-green-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            aria-label="Chat with Proplastics on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-2 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Go to quote request form"
          >
            <FileText className="h-4 w-4" />
            Quote
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
